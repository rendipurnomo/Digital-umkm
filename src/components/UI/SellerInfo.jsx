import React from "react";
import "../../styles/SellerInfo.css";
import { Form, FormGroup } from "reactstrap";

const SellerInfo = () => {
  // const submitHandler = (event) => {
  //   event.preventDefault();
  // };
  return (
    <Form >
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <h4>Alamat:</h4>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <h4>Nama Pemilik:</h4>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <h4>Tahun berdiri:</h4>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
      <h4>Ijin Usaha :</h4>
      </FormGroup>

      <FormGroup>
        <h4>Description:</h4>
      </FormGroup>
    </Form>
  );
};

export default SellerInfo;
