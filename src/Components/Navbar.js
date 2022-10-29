import React, { Component } from "react";
import { Link } from "react-router-dom";
import './nav.css';

export class Navbar extends Component {
  render() {

    const bggg = {background: "#f1f1ef"}
    const clr = {color: "#000000"}
    const headlines = {color: "#34421e"}
    const headerBoldness = {fontSize: "18px", fontWeight: "600"}

    return (
      <div>
        <nav className="navbar navbar-expand-lg" style={{...bggg, ...clr, display: "flex"}}>
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft: "1vw"}}>
                <li className="nav-item">
                  <Link style={{...headlines, ...headerBoldness }} className="nav-link" to="/home">
                    Home
                  </Link>
                </li>

                  <li>
                    <Link style={{...headlines, ...headerBoldness}} className="nav-link" to="/business">
                    Business
                  </Link>
                  </li>
                  <li>
                    <Link style={{...headlines, ...headerBoldness}} className="nav-link" to="/entertainment">
                    Entertainment
                    </Link>
                  </li>
                  <li>
                    <Link style={{...headlines, ...headerBoldness}} className="nav-link" to="/general">
                    General
                    </Link>
                  </li>
                 <li> 
                    <Link style={{...headlines, ...headerBoldness}} className="nav-link" to="/health">
                    Health
                    </Link>
                  </li>
                  <li>
                    <Link style={{...headlines, ...headerBoldness}} className="nav-link" to="/science">
                    Science
                    </Link>
                  </li>
                  <li>
                    <Link style={{...headlines, ...headerBoldness}} className="nav-link" to="/sports">
                    Sports
                    </Link>
                  </li>
                  <li>
                    <Link style={{...headlines, ...headerBoldness}} className="nav-link" to="/technology">
                    Technology
                    </Link>
                  </li>
              </ul>
            </div>
            <a style={{fontWeight: "bolder", ...headlines, fontSize: "22px"}} className="navbar-brand" href="/News">
              NewsCooaat
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
