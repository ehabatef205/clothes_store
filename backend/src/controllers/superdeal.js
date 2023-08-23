const SuperDeal =require( "../models/superdeals");

module.exports.Alldeals = (req, res) => {
    SuperDeal.find()
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
  module.exports.CreateDeal= async (req, res) => {
    const body = req.body;
    const newsuper=new SuperDeal({
        name:body.name,
        products:body.products,
        avilablethrough:body.avilablethrough,
        price:body.price,
        quantity:body.quantity
    }
    )
    await newsuper
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