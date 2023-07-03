import React from "react";
import "../components/section/Section.css";
import { CardsSlider } from "../components/section/CardsSlider";
import FirstHeader from "../components/section/FirstHeader";
import SecHeader from "../components/section/SecHeader";
import Sider from "../components/section/Sider";

export default function Page1() {
  return (
    <div
      className="section_container d-flex  flex-wrap justify-content-center align-content-center"
      style={{ position: "relative", top: "70px" }}
    >
      <section className="sectionone  d-flex  flex-wrap">
        <div className="w-100 ">
          <FirstHeader />
        </div>

        <div className="w-100 " style={{ height: "75px", textalign: "center" }}>
          <h2>shop by Brand</h2>
        </div>

        <div className="adslider  w-100">
          <img src="slider.PNG" alt="" />
          {/* <AdSlider /> */}
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
