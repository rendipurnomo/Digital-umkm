import React, { useRef } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/products",
    display: "Products",
  },

  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i className="ri-phone-fill"></i> 08995-232-430
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="#" className=" d-flex align-items-center gap-1">
                  <i className="ri-login-circle-line"></i> Login
                </Link>

                <Link to="#" className=" d-flex align-items-center gap-1">
                  <i className="ri-user-line"></i> 
                  <span type="button" className="btn_register position-relative">
                    Register
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      Free
                    </span>
                  </span>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="2" md="3" sm="4" className="d-flex align-items-center">
              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    <i className="ri-store-2-line"></i>
                    <span>
                      Digital <br /> UMKM
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="2" md="2" sm="4" className="d-flex align-items-center justify-content-center">
              <div className="header__location d-flex align-items-center justify-content-center gap-2">
                <span>
                  <i className="ri-store-3-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>UMKM</h4>
                  <h6>+100</h6>
                </div>
              </div>
            </Col>

            <Col lg="4" md="2" sm="4" className="d-flex align-items-center justify-content-center">
              <div className="header__location d-flex align-items-center justify-content-center gap-2">
                <div className="header__location-content">
                  <h6>Semangat UMKM Menuju</h6>
                  <h4>GO DIGITAL</h4>
                </div>
              </div>
            </Col>

            <Col lg="2" md="2" sm="4" className="d-flex align-items-center justify-content-center">
              <div className="header__location d-flex align-items-center justify-content-center gap-2">
                <span>
                  <i className="ri-luggage-cart-fill"></i>
                </span>
                <div className="header__location-content">
                  <h4>+5000</h4>
                  <h6>Product</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >
              <button className="header__btn btn ">
                <Link to="/contact">
                  <i className="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
