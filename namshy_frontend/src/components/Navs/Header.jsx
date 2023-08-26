import React from "react";
import { NavBar } from "./Nav1";
export default function Header({visible = true, update_p, personal}) {
  return (
    <div className="d-grid">
      <NavBar visible={visible} update_p={update_p} personal={personal}></NavBar>
    </div>
  );
}
