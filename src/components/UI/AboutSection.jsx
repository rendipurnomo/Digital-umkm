import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/products-img/about.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to Digital UMKM</h2>
              <p className="section__description">
              Selamat datang di Digital UMKM, solusi terbaik untuk UMKM Anda. Jika Anda adalah pemilik bisnis kecil atau usaha mikro, maka Anda telah datang ke tempat yang tepat. Kami mengerti tantangan yang Anda hadapi dalam mengelola bisnis Anda, dan kami di sini untuk membantu Anda meraih sukses.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="box">
              <div className="box1">
                <div className="box2">
                  <div className="box3">
                    <div className="about__img">
                      <img className="images" src={aboutImg} alt="About-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
