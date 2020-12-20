import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestfulUtils from "../../utils/RestfulUtils";
import "./RefillCoin.css";
import { useRecoilState } from "recoil";
import { loginState } from "../../recoil/appState";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
function RefillCoin(props) {
  return (
    <div
      className="refill-coin"
      style={{ backgroundColor: "#545454", minHeight: "calc(100vh - 226px)" }}
    >
      <div className="container-fluid mt-5 mb-5 p-0">
        <div className="inner row d-flex justify-content-center">
          <div className="card col-md-5 col-12 box1">
            <div className="card-content">
              <div className="card-header">
                <div className="heading mb-3"> PAYMENT METHOD </div>
                <div className="sub-heading row text-center m-0">
                  <div className="col-6 col-md-6 sub-heading1">
                    By Credit Card
                  </div>
                  <div className="col-6 col-md-6 sub-heading2">By PayPal</div>
                </div>
              </div>
              <div className="card-body">
                <p>
                  <small>
                    You choose the method of payment with a credit card. Enter
                    your paymentdetails or select another payment method
                  </small>
                </p>
                <div className="credit d-block mt-5 mx-auto">
                  <img
                    className="frnt"
                    src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1575707421/CardArt-Plain-Front-Spotlight.png"
                    width="200px"
                  />
                  <img
                    className="back"
                    src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1575707450/main-qimg-bd6b7e786c2fdb670c89c6ded8fcb973.webp"
                    width="200px"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card col-md-5 col-12 box2">
            <div className="card-content">
              <div className="card-header box2-head">
                <div className="heading2"> PAYMENT DETAILS </div>
              </div>
              <div className="card-body col-10 offset-1">
                <form>
                  <div className="form-group">
                    <label>
                      <small>
                        <strong className="text-muted">CARD HOLDER</strong>
                      </small>
                    </label>
                    <input
                      className="form-control"
                      placeholder="Devin Caldwell"
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      <small>
                        <strong className="text-muted">CARD NUMBER</strong>
                      </small>
                    </label>
                    <div className="d-flex card-number">
                      <input
                        className="form-control"
                        placeholder="1234-4567-4543-1685"
                      />
                      <i className="fas fa-credit-card text-muted fa-2x"></i>
                    </div>
                  </div>
                  <div className="line3">
                    <div className="txt d-flex">
                      <p>
                        <small className="text-muted">EXPERATION DATE</small>
                      </p>
                      <p>
                        <small className="text-muted">CVV</small>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
              <div className="card-footer col-10 offset-1 border-0 footer2">
                <div className="d-flex total mb-5">
                  <p>
                    <strong>TOTAL</strong>
                  </p>
                  <p>
                    <strong>$ 1235</strong>
                  </p>
                </div>{" "}
                <button className="btn col-12"> PAY </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RefillCoin;
