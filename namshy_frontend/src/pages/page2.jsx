import React, { useEffect } from "react";
import "../components/section/Section.css";
import { SearchSlider } from "../components/section/SearchSlider";
import FirstHeader from "../components/section/FirstHeader";
import SecHeader from "../components/section/SecHeader";
import Sider from "../components/section/Sider";
import Header from "../components/Navs/Header";
import * as sub_cat from "../api/subcategory";

export default function Page1() {
  const [category, setCategory] = React.useState({});
  const [Subcategory, setSubCategory] = React.useState({});
  const query = window.location.pathname.split("/")[2];
  const sub = window.location.pathname.split("/")[3];
  useEffect(() => {
    const getCategory = async () => {
      await sub_cat.get_product_category_by_id(sub).then((e) => {
        setSubCategory(e);
      });
    };
    getCategory();
  }, []);
  return (
    <div className="sub_cat ">
      <Header visible={false} />
      <div
        className="section_container d-flex  flex-wrap justify-content-center align-content-center"
        style={{ position: "relative", top: "70px" }}
      >
        <div className="sectionone d-flex flex-wrap">
          <div className="w-100 ">
            <FirstHeader query={query} />
          </div>

          <div
            className="w-100 "
            style={{ height: "75px", textalign: "center" }}
          >
            {" "}
          </div>

          <div className="d-flex flex-row w-100 ">
            <div
              className="d-none d-lg-block"
              style={{ width: "20%", marginLeft: "5%" }}
            >
              <Sider />
            </div>
            <div
              style={{ height: "100%", width: "75%" }}
              className="w-100 w-lg-auto"
            >
              <div className="w-100  " style={{ "max-height": "10%" }}>
                <SecHeader />
              </div>
              <div className=" cards w-100 ">
                <SearchSlider query={query}></SearchSlider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
