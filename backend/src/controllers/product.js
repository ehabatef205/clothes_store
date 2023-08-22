const Product = require("../models/product.js");
const Wish = require("../models/wish.js");
const Cart = require("../models/cart.js");
const mongoose = require("mongoose");
const xlsx = require("xlsx");
const multer = require("multer");
const { MakeRequest ,getmodels,requesttryon} = require("./vrRoom.js");

module.exports.AllProducts = (req, res) => {
  Product.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "An error Occured!",
      });
    });
};
module.exports.CreateProduct = async (req, res, next) => {
  const body = req.body;
  body.supplier = "Wolf";
  const product = new Product(body);

  await product
    .save()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
};

module.exports.UpdateProduct = async (req, res) => {
  const body = req.body;
  let _id = new mongoose.Types.ObjectId(req.params.id);
  await Product.findOneAndUpdate({ _id: _id }, body, { new: true })
    .then((e) => {
      return res.status(200).json(e);
    })
    .catch((err) => {
      return res.json({ message: "Error" });
    });
};

module.exports.UpdateViewProduct = async (req, res) => {
  const body = req.body;
  let _id = new mongoose.Types.ObjectId(req.params.id);
  await Product.findOneAndUpdate({ _id: _id }, { $set: body }, { new: true })
    .then((e) => {
      return res.status(200).json(e);
    })
    .catch((err) => {
      return res.json({ message: "Error" });
    });
};

module.exports.DeleteProduct = async (req, res) => {
  let _id = new mongoose.Types.ObjectId(req.params.id);
  await Cart.find({ product_id: _id }).then(async (carts) => {
    for (var i = 0; i < carts.length; i++) {
      await Cart.deleteMany({ product_id: carts[i].product_id });
    }
  });

  await Wish.find({ product_id: _id }).then(async (wishs) => {
    for (var i = 0; i < wishs.length; i++) {
      await Wish.deleteMany({ product_id: wishs[i].product_id });
    }
  });

  await Product.deleteOne({ _id: _id })
    .then((e) => {
      return res.status(200).json(e);
    })
    .catch((err) => {
      return res.json({ message: "Error" });
    });
};

module.exports.getProduct = async (req, res) => {
  let _id = new mongoose.Types.ObjectId(req.params.id);
  await Product.findOne({ _id: _id })
    .then((e) => {
      return res.json(e);
    })
    .catch((err) => {
      return res.json({ message: "Error" });
    });
};

module.exports.getProductByType = async (req, res) => {
  let _id = req.params.id;
  if (_id === "undefined") {
    _id = { $gte: "" };
  }
  await Product.find({
    category_id: _id,
    typeOfProduct: req.body.typeOfProduct,
    view: true,
  })
    .limit(8)
    .then((e) => {
      return res.json({
        response: e,
      });
    })
    .catch((err) => {
      return res.json({ message: "Error" });
    });
};

module.exports.getProductBySubCategory = async (req, res) => {
  let _id = req.params.id;
  await Product.find({ subCategory: _id, view: true })
    .then((e) => {
      return res.json({
        response: e,
      });
    })
    .catch((err) => {
      return res.json({ message: err.message });
    });
};

module.exports.getProductBySubCategoryfilter = async (req, res) => {
  const _id = req.params.id;
  const q = { colors: [], prices: [], creationDate: null };

  if (req.body.filter.colors !== undefined && req.body.filter.colors.length > 0) {
    const arr = [];
req.body.filter.colors.map((color) => {
  const colorIndex = parseInt(color);
  
  arr.push({ [`sizes.S.${colorIndex}`]: { $gt: 0 } });
  arr.push({ [`sizes.M.${colorIndex}`]: { $gt: 0 } });
  arr.push({ [`sizes.L.${colorIndex}`]: { $gt: 0 } });
  arr.push({ [`sizes.XL.${colorIndex}`]: { $gt: 0 } });
  arr.push({ [`sizes.XXL.${colorIndex}`]: { $gt: 0 } });
});
    q.colors = arr;
  
  }

  if (req.body.filter.prices !== undefined && req.body.filter.prices.length > 0) {
    q.prices = req.body.filter.prices;
  }
  if (req.body.filter.creationDate !== undefined) {
    q.creationDate = req.body.filter.creationDate;
  }
  

  const query = { subCategory: _id, view: true, $and: [] };

  if (q.prices.length > 0) {
    query.$and.push({ $or: q.prices });
  }

  if (q.colors.length > 0) {
    query.$and.push({ $or: q.colors });
  }
  var currentDate = new Date();
  if (q.creationDate !== null) {
    var timer=7
    if(q.creationDate==="month")
    timer=30
    query.$and.push({
      createdAt: {
        $gte: new Date(currentDate.getTime() - timer * 24 * 60 * 60 * 1000)
      }
    });
  }

  try {
    const products = await Product.find(query);
    
    return res.json({ response: products });
  } catch (err) {
    return res.json({ message: err.message });
  }
};

module.exports.searchProductfilter = async (req, res) => {
  const q = { colors: [], prices: [], creationDate: null };

  if (req.body.filter.colors !== undefined && req.body.filter.colors.length > 0) {
    const arr = [];
req.body.filter.colors.map((color) => {
  const colorIndex = parseInt(color);
  
  arr.push({ [`sizes.S.${colorIndex}`]: { $gt: 0 } });
  arr.push({ [`sizes.M.${colorIndex}`]: { $gt: 0 } });
  arr.push({ [`sizes.L.${colorIndex}`]: { $gt: 0 } });
  arr.push({ [`sizes.XL.${colorIndex}`]: { $gt: 0 } });
  arr.push({ [`sizes.XXL.${colorIndex}`]: { $gt: 0 } });
});
    q.colors = arr;
  
  }

  if (req.body.filter.prices !== undefined && req.body.filter.prices.length > 0) {
    q.prices = req.body.filter.prices;
  }
  if (req.body.filter.creationDate !== undefined) {
    q.creationDate = req.body.filter.creationDate;
  }
  

  const query = { 
    name: { $regex: ".*" + req.body.query + ".*", $options: "i" }, view: true, $and: [] };

  if (q.prices.length > 0) {
    query.$and.push({ $or: q.prices });
  }

  if (q.colors.length > 0) {
    query.$and.push({ $or: q.colors });
  }
  var currentDate = new Date();
  if (q.creationDate !== null) {
    var timer=7
    if(q.creationDate==="month")
    timer=30
    query.$and.push({
      createdAt: {
        $gte: new Date(currentDate.getTime() - timer * 24 * 60 * 60 * 1000)
      }
    });
  }
  console.log(query)
  try {
    const products = await Product.find(query);
    
    return res.json({ response: products });
  } catch (err) {
    return res.json({ message: err.message });
  }
};


module.exports.getProductBySubCategory2 = async (req, res) => {
  let _id = req.params.id;
  await Product.find({ subCategory: _id })
    .then((e) => {
      return res.json({
        response: e,
      });
    })
    .catch((err) => {
      return res.json({ message: err.message });
    });
};

const getDataFromExcel = async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded");
  }

  const excelPath = req.file.path;
  const workbook = xlsx.readFile(excelPath); // Step 2
  let workbook_sheet = workbook.SheetNames; // Step 3
  let workbook_response = xlsx.utils.sheet_to_json(
    // Step 4
    workbook.Sheets[workbook_sheet[0]]
  );

  let data = [];

  for (var i = 0; i < workbook_response.length; i++) {
    let images = [];
    if (workbook_response[i].image1) {
      images.push(workbook_response[i].image1);
    }
    if (workbook_response[i].image2) {
      images.push(workbook_response[i].image2);
    }
    if (workbook_response[i].image3) {
      images.push(workbook_response[i].image3);
    }
    if (workbook_response[i].image4) {
      images.push(workbook_response[i].image4);
    }
    if (workbook_response[i].image5) {
      images.push(workbook_response[i].image5);
    }

    data.push({
      supplier: req.body.supplier || "Wolf",
      category_id: req.body.category_id,
      subCategory: req.body.subCategory,
      typeOfProduct: workbook_response[i].typeOfProduct,
      name: workbook_response[i].name,
      quantity: workbook_response[i].quantity,
      SKU: workbook_response[i].SKU.toString(),
      price_before: workbook_response[i].price_before,
      price_after: workbook_response[i].price_after,
      imageSrc: images,
      desc: {
        color: workbook_response[i].color,
        type: workbook_response[i].type,
        brand: {
          name: workbook_response[i].nameOfBrand,
          logo: workbook_response[i].logo,
        },
        description: workbook_response[i].description,
      },
      sizes: {
        s: workbook_response[i].s,
        m: workbook_response[i].m,
        l: workbook_response[i].l,
        xl: workbook_response[i].xl,
        xxl: workbook_response[i].xxl,
      },
      view: workbook_response[i].view,
    });
  }
  res.status(200).json({
    data: data,
  });
};

module.exports.CreateProducts = async (req, res, next) => {
  const products = req.body.products;

  let done = [];
  for (var i = 0; i < products.length; i++) {
    const product = new Product(products[i]);
    await product
      .save()
      .then((response) => {
        done.push("done");
      })
      .catch((error) => {
        res.json({
          message: error.message,
        });
      });
  }

  if (done.length === products.length) {
    res.json({
      message: "Done",
    });
  }
};

module.exports.SearchByName = (req, res) => {
  Product.find({
    name: { $regex: ".*" + req.body.query + ".*", $options: "i" },
  })
    .limit(8)
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "An error Occured!",
      });
    });
};
module.exports.SearchByNameBulk = (req, res) => {
  Product.find({
    name: { $regex: ".*" + req.body.query + ".*", $options: "i" },
  })
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "An error Occured!",
      });
    });
};

module.exports.cart = (req, res) => {
  const ids = req.body.products;
  Product.find({
    _id: {
      $in: ids,
    },
  })
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "An error Occured!",
      });
    });
};

module.exports.uplodaImage = async (req, res, next) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).send("No file uploaded");
  }

  let images = [];

  for (var i = 1; i < req.files.length; i++) {
    images.push(`http://5.183.9.124:5000/${req.files[i].path}`);
  }

  const body = req.body;
  body.supplier = "Wolf";
  body.imageSrc = images;
  var vrprop = {}; 
  if (body.dressing) {
    vrprop.gender = body.gender;
    vrprop.vrpos = body.vrpos;
    vrprop.garment_img_url = images[1];
    if (body.vrpos === "bottoms") {
      vrprop.vrpossec = body.vrpossec;
    }
  }
  body.quantity = JSON.parse(body.quantity)
  const product = new Product({
    supplier: "Wolf",
    category_id: body.category_id,
    subCategory: body.subCategory,
    typeOfProduct: body.typeOfProduct,
    first_visit: false,
    name: body.name,
    dressing: body.dressing,
    ...vrprop,
    sizeable:body.sizeable,
    colors:body.colors,
    SKU: body.SKU,
    price_before: body.price_before,
    price_after: body.price_after,
    imageSrc: images,
    desc: {
      type: body.type,
      brand: {
        name: body.nameOfBrand,
        logo: `http://5.183.9.124:5000/${req.files[0].path}`,
      },
      description: body.description,
    },
    quantity: JSON.parse(body.quantity),
    view: true,
  });

  await product
    .save()
    .then(async (response) => {
        console.log(response.clothing)
      /*if (response.clothing) {    
          await MakeRequest(vrprop)
            .then(async (responseData) => {
              console.log("Response:", responseData);
              if(responseData.success){
                await Product.findOneAndUpdate({_id:response._id},{$set:{garment_id:responseData}},{new:true}).then(updatedproduct=>{
                    return res.json({
                        response:updatedproduct,
                      });
                })
              }
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        
      }*/
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
};
module.exports.models =async  (req, res) => {
  await getmodels(req.body.gender).then(response=>{
    res.json({default:JSON.parse(response).models[0]})
  })
  .catch((error) => {
    res.json({
      message: "An error Occured!",
      error:error.message
    });
  });
};


module.exports.tryon =async  (req, res) => {
  
  await requesttryon(req.body.props).then(response=>{
    res.json({tryon:JSON.parse(response)})
  })
  .catch((error) => {
    res.json({
      message: "An error Occured!",
      error:error.message
    });
  });
};
