import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import FindProduct from "../components/UI/FindProduct";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import productData from "../assets/data/productData";
import ProductItem from "../components/UI/ProductItem";
import BecomeSeller from "../components/UI/BecomeSeller";
import Testimonial from "../components/UI/Testimonial";

import BlogList from "../components/UI/BlogList";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__product-left">
                  <h2>E Katalog UMKM</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindProduct />
              </Col>
            </Row>
          </Container>
              <div className="hero__content">
                <h5>Dalam rangka memajukan<br/>UMKM Go digital</h5>
                <hr/>
              </div>
        </div>
      </section>
      {/* =========== about section ================ */}
      <AboutSection />
      {/* ========== services section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Digital UMKM Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
      {/* =========== product offer section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Product</h6>
              <h2 className="section__title">Rekomendasi</h2>
            </Col>

            {productData.slice(0, 6).map((item) => (
              <ProductItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
      {/* =========== become a driver section ============ */}
      <BecomeSeller />

      {/* =========== testimonial section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Our clients says</h6>
              <h2 className="section__title">Testimonials</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>

      {/* =============== blog section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Explore our blogs</h6>
              <h2 className="section__title">Latest Blogs</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
