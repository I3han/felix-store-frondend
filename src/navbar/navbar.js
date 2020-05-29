import React from "react";
import { NavLink } from "react-router-dom";

import "./navbar.scss";

const Navbar = () => {
    return (
        <ul className="Navbar">
        
        <li><NavLink to="/" exact className="item" activeClassName="activeNav">Buy Items</NavLink></li>
        <li><NavLink to="/sell" exact className="item" activeClassName="activeNav">Sell Items</NavLink></li>
        <li><NavLink to="/dis" exact className="item" activeClassName="activeNav">Discounts</NavLink></li>
  
        </ul>
    );
}

export default Navbar;