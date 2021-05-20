import React from "react";
import "./index.css";

export default function FloatingIcons() {
  function handleActiveClass() {
    document.getElementById("circularMenu").classList.toggle("active");
  }
  return (
    <div id="circularMenu" className="circular-menu">
      <a className="floating-btn" onClick={handleActiveClass}>
        <i class="fa fa-question" style={{ fontSize: "30px" }} />
      </a>
      <menu className="items-wrapper">
        <a href="/" className="menu-item">
          <i className="fa fa-comments" />
        </a>
        <a href="/" className="menu-item">
          <i className="fa fa-bug" />
        </a>
        <a href="/" className="menu-item">
          <i className="fa fa-search" />
        </a>
      </menu>
    </div>
  );
}
