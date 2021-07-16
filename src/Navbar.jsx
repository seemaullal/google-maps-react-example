import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoPath from "./images/watermelon.png";

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="havbar-brand d-flex justify-content-center">
        <img src={logoPath} height="30" alt="logo" />
        <span>Ubermelon</span>
      </Link>

      <section className="d-flex justify-content-end">
        <NavLink
          to="/map"
          activeClassName="navlink-active"
          className="nav-link nav-item"
        >
          Map
        </NavLink>
      </section>
    </nav>
  );
}
