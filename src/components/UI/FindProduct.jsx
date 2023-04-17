import React from "react";
import "../../styles/find-product.css";
import { Form, FormGroup } from "reactstrap";

const FindProduct = () => {

  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
      <FormGroup className="form__group">
          <input type="text" placeholder="Search" />
        </FormGroup>
        <FormGroup className="select__group">
      <select className="form-select" id="valid-was-validated-single-field" data-placeholder="Kota">
        <option>Kota</option>
        <option>Jakarta</option>
        <option>Surabaya</option>
        <option>Solo</option>
        <option>Bandung</option>
      </select>
        </FormGroup>
        <FormGroup className="select__group">
        <select className="form-select" id="valid-was-validated-single-field" data-placeholder="Kategori">
        <option>Kategori</option>
        <option>Craft</option>
        <option>Makanan</option>
        <option>Pakaian</option>
        <option>Accesoris</option>
      </select>
        </FormGroup>
        <FormGroup className="form__group">
          <button className="btn find__product-btn">Temukan Produk</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindProduct;
