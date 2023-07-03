import React from "react";
import "../components/section/Section.css";
import { CardsSlider } from "../components/section/CardsSlider";
import FirstHeader from "../components/section/FirstHeader";
import SecHeader from "../components/section/SecHeader";
import Sider from "../components/section/Sider";
export default function Page2() {
  return (
    <div
      style={{ position: "relative", top: "70px" }}
      className="section_container d-flex  flex-wrap justify-content-center align-content-center"
    >
      <section className="sectionone  d-flex  flex-wrap">
        <div className="w-100 ">
          <FirstHeader />
        </div>

        <div
          className=" w-100 "
          style={{ height: "75px", textalign: "center" }}
        >
          <h2>shop by Brand</h2>
        </div>

        <div
          className="para d-flex w-100 justify-content-between "
          style={{ backgroundColor: "#F5F5F5" }}
        >
          <div className=" w-50 p-4">
            <h4 className="d-flex">text one</h4>
            <p style={{ color: "gray", fontSize: "12px", textAlign: "left" }}>
              bbbbLorem ipsum dolor, sit amet consectetuVel explicabo accusamus
              eius aperiam fugiat dolore voluptatibus! Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Modi voluptatum vitae facere
              delectus atque vel est perspiciatis itaqm ipsum ex nulla.
            </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/5709665/pexels-photo-5709665.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              style={{ width: " 330px", height: "180px" }}
            />
          </div>
        </div>

        <div className="d-flex flex-wrap w-100">
          <div>
            <Sider></Sider>
          </div>
          <div
            className="  d-grid"
            style={{ height: "fit-content", width: "1000px" }}
          >
            <div className="w-100  justify-content-start">
              <SecHeader />
            </div>
            <div className=" cards w-100 ">
              <CardsSlider></CardsSlider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
