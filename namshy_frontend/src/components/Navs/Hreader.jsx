import React from "react";
import { NavBar } from "./Nav1";
import { Nav2 } from "./Nav2";
export default function Header() {
  return (
    <div className="d-grid">
      <NavBar></NavBar>

      <Nav2></Nav2>
    </div>
  );
}
