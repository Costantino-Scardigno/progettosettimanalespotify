import { Col } from "react-bootstrap";
import { FaBookOpen } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import React, { useState } from "react";

const SideBar = ({ setQuery }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setQuery(inputValue);
  };

  return (
    <div className="col-2 col-md-3 col-lg-3 col-xl-2 p-0">
      <nav
        className="navbar navbar-expand-md fixed-left justify-content-between"
        id="sidebar"
      >
        <div className="container flex-column align-items-start">
          <a className="navbar-brand" href="index.html">
            <img
              src="../src/assets/logo.png"
              alt="Spotify Logo"
              width="131"
              height="40"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li>
                  <a
                    className="nav-item nav-link d-flex align-items-center"
                    href="#"
                  >
                    <IoHomeSharp className="i me-2" /> Home
                  </a>
                </li>
                <li>
                  <a
                    className="nav-item nav-link d-flex align-items-center"
                    href="#"
                  >
                    <FaBookOpen className="i me-2" /> Your Library
                  </a>
                </li>
                <li>
                  <div className="input-group mt-3">
                    <form onSubmit={handleFormSubmit} className="w-100">
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        aria-label="Search"
                        value={inputValue}
                      />
                      <button
                        className=" btn btn-secondary w-100 bg-success   mt-2"
                        type="submit"
                      >
                        GO
                      </button>
                    </form>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-btn">
          <button className="btn signup-btn" type="button">
            Sign Up
          </button>
          <button className="btn login-btn" type="button">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
