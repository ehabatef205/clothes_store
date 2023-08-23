// import React, { useState, useEffect } from "react";
// // import { getAvailableColorsAndSizes } from "./color-size";
// import { useParams } from "react-router-dom";
// import { Container } from "react-bootstrap";
// import { Rating } from "@mui/material";
// // import Header from "../components/Navs/Header";
// // import ThirdSlider from "../components/section/ThirdSlider";
// // import * as Product from '../api/product'
// // import * as Cart from '../api/cart'
// // import * as Wish from '../api/wish'
// // import { Cookies } from 'react-cookie'
// // import { update } from "../api/personal_cookies";

// function SelectedProductPage() {
//   const [childHeight, setChildHeight] = useState(0);
//   const size=['ssssjjjjjjjjjjjjjjssss','ss','3434','3434','3','fffffff','ssssjjjjjjjjjjjjjjssss','ss','3434','3']
//   const color=['danger','light','dark','success','info']
//   const [selected, setSelected] = useState({});
// const  imges=["https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=600","https://images.pexels.com/photos/3782789/pexels-photo-3782789.jpeg?auto=compress&cs=tinysrgb&w=600",'https://images.pexels.com/photos/4996772/pexels-photo-4996772.jpeg?auto=compress&cs=tinysrgb&w=600',"https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=600","https://images.pexels.com/photos/3782789/pexels-photo-3782789.jpeg?auto=compress&cs=tinysrgb&w=600",'https://images.pexels.com/photos/4996772/pexels-photo-4996772.jpeg?auto=compress&cs=tinysrgb&w=600']
//   // const [AVC, setAVC] = useState([]);
//   // const [AVS, setAVS] = useState({});

//   // const [Sizet, setSizet] = useState('');
//   // const [Colort, setColort] = useState('');
//   // const cookie = new Cookies()
//   // const [personal, setpersonal] = useState({})
//   // const update_p=async()=>{
//   //   var p=await update()
//   //   setpersonal(p)
//   // }
// const[formattedDescription,setformattedDescription]=useState("")
//   const { id } = useParams();
//   useEffect(() => {
//     const child1 = document.getElementById("child1");
//   const child1Height = child1.offsetHeight;
//   setChildHeight(child1Height);
//     // const getById = async () => {
//     //   await Product.get_product_by_id(id).then((e) => {
//     //     setSelected(e)
//     //     const formated =JSON.parse( e.desc.description).replace(/\n/g, "<br>");
//     //     setformattedDescription(formated)
//         // const { availableColors, availableSizes } = getAvailableColorsAndSizes(e.colors, e.sizes);
//         // setAVC(availableColors)
//         // setAVS(availableSizes)
//     //   }
//     //   )
//     // }
//     // getById()

 
//     // update_p()
//   }, []);


//   // const [value, setValue] = useState(0);

//   // const addtoBag = async () => {
//   //   await Cart.add_cart(id, 1,Colort,Sizet,selected.clothing, cookie.get("Auth")).then((e) => {
//   //     update_p()
//   //   })
//   // }
//   // const deletebag = async () => {
//   //   await Cart.Delete_by_product(id).then((e) => {
//   //     update_p()
//   //   })
//   // }
//   // const addtowish = async () => {
//   //   await Wish.add_cart(id, 1, cookie.get("Auth")).then((e) => {
//   //     update_p()
//   //   })
//   // }
//   // const deletewish = async () => {
//   //   await Wish.Delete_by_product(id).then((e) => {
//   //     update_p()
//   //   })
//   // }
//   // const [Showrate, setShowrate] = useState(true);
//   // const handleRateClick = () => {
//   //   setShowrate(false)
//   // };
//   return (
//     <div>
//       {/* <Header visible={false} ></Header> */}
//       <div
//         className="viewcontainer justify-content-center   "
//         style={{ position: "relative", top: "70px" }}
//       >
//       </div>
// {/* /////////////// */}
//       <div className=" m-3" style={{ textAlign: "center" }}>
//         {" "}
//         <nav aria-label="breadcrumb">
//           <ol className="breadcrumb m-0">
//             <li className="breadcrumb-item">
//               <a href="#" style={{ color: "black", textDecoration: "none" }}>
//                 Home
//               </a>
//             </li>
//             <li className="breadcrumb-item">
//               <a href="#" style={{ color: "black", textDecoration: "none" }}>
//                 woman
//               </a>
//             </li>
//             <li className="breadcrumb-item active" aria-current="page">
//               clothings
//             </li>
//           </ol>
//         </nav>
//       </div>
//       {/* ////////////////////// */}
//       <Container id="parent" className="d-flex flex-wrap "
//       //  style={{ width: "100%" }}
    
//        >

//         <div className="flex-wrap " style={{ display: "flex", flexDirection: "row", width: "100%", height:"fit-content"}}>
//           <div
//             id="child1"
//             className="d-flex flex-wrap col-lg-6 col-sm-12  "
//             style={{ padding: "0px", justifyContent: "space-between" }}
//           >

//             {
//             // selected?.imageSrc?
//            imges.map((image, index) => (
//               <img
//                 key={index}
//                 style={{ width: "320px", height: "400px" }}
//                 className="d-block my-1   "
//                 src={image}
//                 alt={""}
//               />
//             ))}
//           </div>
//           <div
//             id="child2"
//             className=" d-flex flex-wrap col-lg-6 col-sm-12 "
//             style={{
//               overflow: "auto",
//               padding: "15px",
              
//               height: childHeight,
//             }}
//           >
//             <div className=" d-flex flex-wrap  col-12    "
//              style={{
             
//               height: "fit-content",
//             }}>
//               <div
//                 className=" d-flex flex-wrap   w-100  "
//               >
               
//                 <div className="  w-100  ">
//                   <pre className="w-100  " ><b className="w-100  "  style={{whiteSpace: "normal", textAlign: "left", fontSize: "25px", }}>
//                     {/* {selected?.name} */}
//                     name
//                   </b></pre>
                  
//                 </div>
                
//                 <div className="d-flex w-100 flex-wrap justify-content-between" style={{ fontSize: "1.2rem" }}>

//                 <div
//                   className="  d-flex "
//                   style={{ fontSize: "18px",flexDirection:"column" }}
//                 >
//                   <del className=" mx-2 text-danger">
//                     {/* {selected?.price_before} */}
//                    111 $
//                      </del>
//                   {" "}
//                   <div className=" mx-2 text-body" style={{fontSize:"30px"}}>
//                     {/* {selected?.price_after}$  */}
//                     22222222222
//                     </div>
//                 </div>
//                 <div style={{ borderRadius: "50px", width: "fit-content", height: "fit-content" }} className=" bg-danger-subtle col-3  d-flex justify-content-center">
//                     {/* <b className="my-3 mx-4" >{(((selected?.price_before- selected?.price_after) * 100) / selected?.price_before).toFixed(1)}%</b> */}
//                     </div>
            
//                 </div> 
//               </div>
//               {/*  */}
//               <div
//                 className=" d-flex flex-wrap  w-100   "
//                 style={{ width: "100%", height: "fit-content" }}
//               >
               
//                 <div className=" w-100   ">
                  
                  
//                   {/* {selected?.clothing&&<> */}
                  
//                     <div
//                   className="d-flex  w-100 "
//                   style={{ height: "40px" }}
//                 >
//                   <div className=" ">
//                    <b style={{ fontSize: "25px" }}>size</b>
//                   </div>
                   
//                 </div>
              
//                    <div
//                     className="   justify-content-start  "
//                     style={{ textAlign: "left" ,height:"fit-content" }}
//                   >
//                     <div
//                     className=" my-1  justify-content-start  "
//                     style={{ textAlign: "left"
//                      ,height:"fit-content"
//                     }}
//                   >
//                     {" "}
//                     {size.map((size, index) => (
//                       <button 
//                         style={{
//                           zIndex: 3,
//                           cursor: "pointer",
//                           minWidth: "60px",
//                           maxWidth:"fit-content",
//                           borderRadius: "2px",
//                         }}
//                         key={index}
//                         className="btn  btn-outline-secondary m-2"
//                       >
//                         {size}
//                       </button>
//                     ))}
//                   </div> <div
//                     className=" my-2  justify-content-start  "
//                     style={{ textAlign: "left"
//                      ,height:"fit-content"
//                     }}
//                   >
//                     {" "}
//                     {color.map((color, index) => (
//                       <i 
//                         style={{
                         
//                           cursor: "pointer",
                        
//                         }}
//                         key={index}
//                         className={`my-3 mx-1 bi bi-circle-fill text-${color}`}

                       
//                       >
                        
//                       </i>
//                     ))}
//                   </div>
//                   </div>
//                     {/* 
//                     {
//                     selected.colors?
//                     AVC.map((color, index) => (
//                       <button
//                       key={index}
//                       onClick={() =>{setColort(color)
//                       setSizet("")
//                       }}
//                         style={{
//                           zIndex: 3,
//                           cursor: "pointer",
//                           width: "70px",
//                           borderRadius: "2px",
//                           backgroundColor:color,
//                           color:color,
//                         }}
                        
//                         className="btn  btn-outline-secondary "
//                       >
//                         000
//                       </button>
//                     )):<></>}
//                     <br/>
//                     {
//                     Colort!==""?
//                     AVS[Colort].map((size, index) => (
//                       <button
//                       key={index}
//                       onClick={() =>{setSizet(size)}}
//                         style={{
//                           zIndex: 3,
//                           cursor: "pointer",
//                           width: "70px",
//                           borderRadius: "2px",
//                           backgroundColor:size===Sizet? 
//                           "gray":"transparent",
//                           color:size===Sizet? 
//                           Colort:"gray",
//                           borderColor:Colort,
//                         }}
                        
//                         className="btn  btn-outline-secondary "
//                       >
//                         {size}
//                       </button>
//                     )):<></>}
//                   </div> </>}
//                   */}
//                 </div>
//                 {/* <div className="  w-100" >productname</div> 
//     <div className="w-100 " >prise/ old</div> */}
//               </div>
//               {/*  */}
//               <div
//                 className=" d-flex  w-100   "
//                 style={{ flexDirection: "flex-row" }}

//               >
//                 <div className=" d-flex w-100  "
//                   style={{ flexDirection: "flex-row" }}
//                 >
//                   <span className=" mx-3" style={{ textAlign: "center", width: "45%" }}>
//                     <button
//                       // disabled={personal?.cart?.includes(selected._id)||(selected.clothing?((Colort==='')||(Sizet==='')):selected.clothing)}
//                       className="btn text-light my-3 h-75 w-100"
//                     //  onClick ={() => {  addtoBag() }}
//                       style={{ backgroundColor: "#d99d2b", fontSize: "1.2rem" }}
//                     >
//                        {/* {personal?.cart?.includes(selected._id)?(<i className="text-primary">Added to Bag{" "}</i>):(<i>Add to Bag{" "}</i>)} */}
//                     </button>
//                   </span>


//                   <span style={{ textAlign: "center", width: "45%", fontSize: "1.2rem" }}>
//                     <button 
//                     // disabled={personal?.wish?.includes(selected._id)}
//                   //   onClick={() => {
//                   //     /*if(personal?.wish?.includes(selected._id)){
//                   //       deletewish()
//                   //     }else{*/
//                   //     addtowish()
//                   //   //}
//                   // }}
//                     className="btn bg-light my-3  text-dark h-75 w-100">
//                       {/* {personal?.wish?.includes(selected._id)?(<i className="text-danger">Added to wish list{" "}</i>):(<i>Add to wish list{" "}</i>)} */}
                      
//                     </button>
//                   </span>

//                 </div>
//               </div>
//               <div className=" d-flex w-75  justify-content-around my-4 " style={{ marginLeft: "75px", gap: "15%" }}
//               >
//                 <span className="" style={{ height: "100%" }}>
//                   <img

//                     src=" https://a.namshicdn.com/web-desktop/2be1a1eca215dfed8e18.svg "
//                     alt=""
//                   />
//                   <div>Free Shipping</div>
//                 </span>
//                 <span className="" style={{ height: "100px" }}>
//                   <img
//                     src="https://a.namshicdn.com/web-desktop/04712760e51a72afe9cc.svg"
//                     alt=""
//                   />
//                   <div>100% Genuine</div>
//                 </span>
//               </div>
//               {/**/}
//               <div
//                 className=" d-flex flex-wrap  "
//                 style={{ width: "100%", borderBottom: " 1px solid gray" }}
//               >
//                 <div
//                   style={{ borderBottom: " 1px solid gray", textAlign: "left" }}
//                 >
//                   Description :<br></br> 
//                   <div dangerouslySetInnerHTML={{ __html: formattedDescription }} />
//                 </div>
//               </div>

//               <div
//                 className=" d-flex flex-wrap   "
//                 style={{ width: "100%", height: "fit-content", borderBottom: " 1px solid gray ", }}
//               >
//                 <div
//                   className="my-4"
//                   style={{

//                     textAlign: "left",
//                   }}
//                 >
//                   Info & Care :
//                 </div>
//                 <div className="d-flex">
//                   <div style={{ textAlign: "left", marginTop: "24px", marginLeft: "5px" }}>
//                     {" "}
//                     SKU
//                      {/* {selected?.SKU} */}
  
//                     <br /> 
//                     {/* product material : {selected?.desc?.type} */}
//                   </div>
//                 </div>
//               </div>
//               {/*  */}
//               <div
//                 className=" d-flex    "
//                 style={{ width: "100%" }}
//               >
//                 <div className="d-flex w-50  ">
//                   <div
//                     className="brand-link follow-brand__logo"
                   
//                     data-brand-name="adidas Originals"
//                     data-brand-url="/adidas_originals/"
//                   >
//                     <img style={{width:"200px",height:"130px"}}
//                       // src={selected?.desc?.brand?.logo}
//                       data-nm-invalid-image-remover=""
//                     />
//                   </div>
//                 </div>
//                 <div className=" w-50">
//                   <div className=" m-3 " style={{ textAlign: "left" }}>
//                     {/* {selected?.desc?.brand?.name} */}
//                   </div>

//                 </div>
                
//               </div>
//             </div>
//           </div>
//           {/* //////////////////////////////////// */}
//         </div>
//       </Container>
//       <Container className="justify-content-center " style={{ width: "100%" }}>
//       {/* {Showrate && (  */}
//          <section
//          className=" d-flex flex-wrap justify-content-between  my-5 "
//          style={{

//            width: "100%",
//            padding: "10px",
//            border: "1px solid gray",
//          }}
//        >
//          <div className="col-lg-4 col-7  ">
//            <p className="m-1 mx-3">Do you own or have used the product?</p>
//            <p className="m-1 mx-3">Tell your opinion by assigning a rating</p>
//          </div>
//          {/* <div className=" col-lg-4  col-5 d-flex justify-content-around">
//            <Rating
//              className="m-4"
//              name="simple-controlled"
//              value={value}
//              onChange={(event, newValue) => {
//                setValue(newValue);
//              }}
//            />
//          </div> */}
//          <div className=" col-lg-4 col-12 d-flex justify-content-around ">

//            <span className="btn my-3 btn-outline-warning w-50 " role="button"
           
//           //  onClick={handleRateClick}
//            >

//              Rate this product{" "}
//            </span>
//          </div>
//        </section>
//       {/* )} */}
      

      

//         {/* <section className=" my-5 h-25 " style={{ width: "100%" }}>
//           <div className=" w-100 my-3  " style={{ textAlign: "left" }}>
//             <h3>Similar Products</h3>
//           </div>
//           <div>
//             <ThirdSlider id="second"></ThirdSlider>
//           </div>
//         </section> */}
//       </Container>
//     </div>

//   );
// }

// export default SelectedProductPage;
