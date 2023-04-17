import React from "react";
import "../../styles/becomeSeller.css";
import { Container, Row, Col } from "reactstrap";

import becomeImg from "../../assets/all-images/become.png";

const BecomeSeller = () => {
  return (
    <section className="become__seller">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__seller-img">
            <img src={becomeImg} alt="Seller" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__seller-title">
              Ingin produk anda dipasang di website ini?
            </h2>

            <button className="btn become__seller-btn mt-4">
              Pasang Produk
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeSeller;
