import React from "react";
import { NavBar } from "./Nav1";
export default function Header({visible = true}) {
  return (
    <div className="d-grid">
      <NavBar visible={visible}></NavBar>
    </div>
  );
}
