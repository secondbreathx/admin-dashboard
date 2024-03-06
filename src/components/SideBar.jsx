import React from "react";
import "../components/SideBar.css";
import navList from "../data/navItem";
import NavItem from "./NavItem";

function SideBar() {
  return (
    <aside id="sidebar" className="sidebar">
      <ul id="sidebar-nav" className="sidebar-nav">
        {navList.map(nav => <NavItem key={nav._id} nav={nav} />)}
      </ul>
    </aside>
  );
}

export default SideBar;
