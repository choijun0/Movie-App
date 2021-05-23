import React from "react";
import {Link} from "react-router-dom"
import "./Navigation.css"

function Navigation(){
  //Link is only used for Route component
  return <div className="nav">
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  </div>
}

export default Navigation;