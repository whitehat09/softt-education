import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestfulUtils from "../../utils/RestfulUtils";
import "./RefillCoin.css";
import { useRecoilState } from "recoil";

import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { loginState } from "../../recoil/appState";
function RefillCoin(props) {
  const [login, setLogin] = useRecoilState(loginState);

  const history = useHistory();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [money, setMoney] = useState("");
  const [content, setContent] = useState("");
  const [user, setUser] = useState({ _id: "" });

  const onChangName = (e) => {
    setName(e.target.value);
  };
  const onChangNumber = (e) => {
    setNumber(e.target.value);
  };
  const onChangMoney = (e) => {
    setMoney(e.target.value);
  };
  const onChangContent = (e) => {
    setContent(e.target.value);
  };
  useEffect(() => {
    const user = JSON.parse(
      sessionStorage.getItem("user") || localStorage.getItem("user")
    );
    console.log("thông tin người dùng :", user);
    if (user) {
      setUser(user);
    }
  }, []);
  const refillCoin = () => {
    if (login) {
      const data = {
        userId: user._id,
        bankAccount: number,
        bankNameAdmin: name,
        amount: money,
        content: content,
      };
      console.log(data);
      RestfulUtils.post("http://localhost:3030/refill-coins", data)
        .then((res) => {
          if (!res.errors && res.status === 200) {
            toast.success(res.data.message);
            console.log("Gửi yêu cầu nạp coin thành công !");
          } else {
            toast.error(res.data);
            console.log("Gửi yêu cầu nạp coin  thất bại !");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      history.push("/login");
    }
  };

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
                <div className="heading mb-3">Phương thức thanh toán</div>
                <div className="sub-heading row text-center m-0">
                  <div className="col-6 col-md-6 sub-heading1">
                    Bằng thẻ tín dụng
                  </div>
                  <div className="col-6 col-md-6 sub-heading2">
                    Thanh toán bằng PayPal
                  </div>
                </div>
              </div>
              <div className="card-body">
                <p>
                  <small>
                    Bạn chọn phương thức thanh toán bằng thẻ tín dụng. Nhập chi
                    tiết thanh toán của bạn hoặc chọn một phương thức thanh toán
                    khác
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
                <div className="heading2"> Chi tiết thanh toán </div>
              </div>
              <div className="card-body col-10 offset-1">
                <form>
                  <div className="form-group">
                    <label>
                      <small>
                        <strong className="text-muted">Tên ngân hàng</strong>
                      </small>
                    </label>
                    <div className="d-flex card-number">
                      <input
                        onChange={onChangName}
                        type="text"
                        value={name}
                        className="form-control"
                        placeholder="Tp bank"
                      />
                      <i class="fas fa-university text-muted fa-2x"></i>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>
                      <small>
                        <strong className="text-muted">Số thẻ</strong>
                      </small>
                    </label>
                    <div className="d-flex card-number">
                      <input
                        onChange={onChangNumber}
                        className="form-control"
                        type="number"
                        placeholder="6666-8888-9999-6789"
                      />
                      <i className="fas fa-credit-card text-muted fa-2x"></i>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>
                      <small>
                        <strong className="text-muted">
                          Số tiền thanh toán
                        </strong>
                      </small>
                    </label>
                    <div className="d-flex card-number">
                      <input
                        onChange={onChangMoney}
                        type="number"
                        className="form-control"
                        placeholder="100 000 vnđ "
                      />
                      <h3>VNĐ</h3>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          Nội dung thanh toán
                        </span>
                      </div>
                      <textarea
                        onChange={onChangContent}
                        type="text"
                        className="form-control"
                        aria-label="With textarea"
                      ></textarea>
                    </div>
                  </div>
                </form>
              </div>
              <div className="card-footer col-10 offset-1 border-0 footer2">
                <button
                  className=" btn btn-refill-coin col-12"
                  onClick={refillCoin}
                >
                  Thanh toán
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RefillCoin;
