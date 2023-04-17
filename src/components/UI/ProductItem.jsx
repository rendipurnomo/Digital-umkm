import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/product-item.css";

const ProductItem = (props) => {
  const { imgUrl, productName, kota, namaToko, rating, price } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="product__item">
        <div className="product__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="product__item-content mt-4">
          <h4 className="section__title text-center">{productName}</h4>
          <h6 className="product__price text-center mt-">
            Rp.{price}.00 <span>/ pcs</span>
          </h6>

          <div className="product__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-map-pin-line"></i> {kota}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-store-2-line"></i> {namaToko}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-star-s-fill"></i> {rating}
            </span>
          </div>

          
            <Link to={`/products/${productName}`}>
              <button className=" w-50 product__item-btn product__btn-product">Order</button>
            </Link>
          

          
            <Link to={`/products/${productName}`}>
              <button className=" w-50 product__item-btn product__btn-details">Details</button>
              </Link>
          
        </div>
      </div>
    </Col>
  );
};

export default ProductItem;
