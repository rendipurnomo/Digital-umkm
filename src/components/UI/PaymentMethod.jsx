import React from "react";

import masterCard from "../../assets/all-images/master-card.jpg";
import "../../styles/payment-method.css";

const PaymentMethod = () => {
  return (
    <>
      <div className="payment">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> Direct Bank Transfer
        </label>
      </div>

      <div className="payment mt-3">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> Cheque Payment
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> Master Card
        </label>

        <img src={masterCard} alt="" />
      </div>
      <div className="payment text-end mt-5">
        <button>Pesan Sekarang</button>
      </div>
    </>
  );
};

export default PaymentMethod;
