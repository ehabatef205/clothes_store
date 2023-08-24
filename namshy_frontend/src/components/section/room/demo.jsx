import React, { useEffect } from "react";
import { tryon } from "../../../api/product";

import { Container } from "react-bootstrap";
function Demo(props) {
  const [selectedgender,setselectedgender]=React.useState("f")
  const [viewimage,setviewimage]=React.useState("https://reveryai.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8ad9503b-779f-42e2-b031-25d7e114827b%2Fmodel_15301356.png?table=block&id=5dc004b2-452f-4186-bc50-d62f4847b035&spaceId=d32a2c79-e329-4a17-9023-ff73a1f84676&width=1960&userId=&cache=v2")
  const [selectedtops,setselectedtops]=React.useState("")
  const [selectedbottoms,setselectedbottoms]=React.useState("")
  const [tops,settops]=React.useState([])
  const [bottoms,setbottoms]=React.useState([])
const [maletopsid,setmaletopsid]=React.useState([])
const [malebottoms_id,setmalebottoms_id]=React.useState([])
const [femaletopsid,setfemaletopsid]=React.useState([])
const [femalebottoms_id,setfemalebottoms_id]=React.useState([])
useEffect(()=>{
  console.log(props)
  var male=props.products?.filter(product=>product.gender==="male"&&product.garment_id)
  var female=props.products?.filter(product=>product.gender==="female"&&product.garment_id)
  var maletops=male?.filter(product=>product.vrpos==="tops")
  var femaletops=female?.filter(product=>product.vrpos==="tops")
  var malebottoms=male?.filter(product=>product.vrpos==="bottoms")
  var femalebottoms=female?.filter(product=>product.vrpos==="bottoms")
setmaletopsid(maletops)
setmalebottoms_id(malebottoms)
setfemaletopsid(femaletops)
setfemalebottoms_id(femalebottoms)
setbottoms(femalebottoms)
settops(femaletops)
},[props])
useEffect(()=>{
 setselectedtops("")
 setselectedbottoms("")
  if(selectedgender==="f"){
    setbottoms(femalebottoms_id)
    settops(femaletopsid)
  }
  else if (selectedgender==="m"){
    setbottoms(malebottoms_id)
    settops(maletopsid)
  }

},[selectedgender])

const handeltryon=async()=>{
  if(selectedbottoms===""||selectedtops==="")
  {

  }
  else{
    await tryon(selectedtops,selectedbottoms).then(e=>{
      console.log(e)
      if(e.tryon.success){
        setviewimage(`https://media.revery.ai/generated_model_image/${e.tryon.model_metadata.model_file}.png`)
      }
    })
  }
}
  return (
    <Container
      className="  d-flex flex-row justify-content-center  "
      style={{ height: "600px" }}
    >
      <div
        className="col-lg-6 col-md-6 col-12"
        style={{ height: "600px", width: "600px " }}
      >
        
        <img
          src={viewimage}
          alt="model"
          className="w-100 h-100  "
        />
      </div>
      <div
        className="col-lg-6 col-md-6 col-12 d-flex flex-wrap justify-content-center "
        style={{
          height: "fit-content",
          width: "600px ",
          border: " 0.5px solid gray",
        }}
      >
        <div className="col-2  " style={{ borderRight: " 0.5px solid gray" }}>
          <div
            className=" bg-dark my-3 mx-3 d-flex justify-content-center "
            style={{
              borderRadius: "50%",
              width: "70px",
              height: "70px",
              cursor: "pointer",
               position:"relative",
                top:"100px" 
            }}
          >
            <img
              src="https://revery-integration-tools.s3.us-east-2.amazonaws.com/images/tops.svg"
              role="botton"
              alt="tops"
              className="w-75 my-2 h-75"
            />
          </div>

          <div
            className=" bg-dark my-3 mx-3 d-flex justify-content-center  "
            style={{
                position:"relative",
                top:"250px",
              borderRadius: "50%",
              width: "70px",
              height: "70px",
              cursor: "pointer",
            }}
          >
            <img
              src="https://revery-integration-tools.s3.us-east-2.amazonaws.com/images/bottoms.svg"
              role="botton"
              alt="bottoms"
              className="w-75 my-2 h-75"
            />
          </div>

       
        </div>
        <div className="col-10  ">
          <div
            className="w-100 "
            style={{ height: "fit-content", borderBottom: " 0.5px solid gray" }}
          >
            <button className="btn bg-light b-1 w-25 my-2 mx-3" onClick={()=>{setselectedgender("f")}}>f</button>
            <button className="btn bg-light b-1 w-25 my-2 mx-3"onClick={()=>{setselectedgender("m")}}>m</button>
          </div>
          <div
            className="w-100 d-flex flex-wrap "
            style={{ height: "fit-content" }}
          >
            <div className="d-flex  " style={{overflow:"scroll" ,width:"550px",height:"fit-content"}}>
            {tops.map((top) => (
              <div
              onClick={()=>{setselectedtops(top.garment_id)}}
                className=" mx-2 my-3 "
                style={{ height: "200px", width: "150px",backgroundColor:selectedtops===top.garment_id?"#454545":"none" }}
              >
                <img
                  key={top?.id}
                  src={top?.imageSrc[0]}
                  alt={top?.name}
                  style={{ height: "150px", width: "150px" }}
                />
                <p  style={{ height: "50px" }}>  {top?.name} </p>
              </div>
            ))}
            </div>

            <div className="d-flex  " style={{overflow:"scroll" ,width:"550px",height:"fit-content"}}>
            {bottoms.map((bottom) => (
              <div
              onClick={()=>{setselectedbottoms(bottom.garment_id)}}
                className=" mx-2 my-3 "
                style={{ height: "200px", width: "150px" ,backgroundColor:selectedbottoms===bottom.garment_id?"#454545":"none" }}
              >
                <img
                  key={bottom?.id}
                  src={bottom?.imageSrc[0]}
                  alt={bottom?.name}
                  style={{ height: "150px", width: "150px" }}
                />

               <p  style={{ height: "50px" }}>  {bottom?.name} </p>
              </div>
            ))}
          </div>
          </div>
         
        </div>
        <div  className="w-100 my-3 ">
            <button className="btn btn-outline-danger w-75" onClick={handeltryon}> apply</button> </div>
      </div>
    </Container>
  );
}

export default Demo;