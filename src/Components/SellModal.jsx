import React from "react";
import { useState } from "react";
import { placeSellOrder } from "../Utils/Apis";
import { toast } from "react-toastify";

const SellModal = ({ id, short_name, company_name }) => {
  const [qty, setQty] = useState(0);
  const [sell, setSell] = useState(0);

  const handleBuy = (e) => {
    e.preventDefault();
    const tid = toast.loading("Please wait...");
    const data = {
      company: id,
      quantity: qty,
      ask_price: sell,
    };
    placeSellOrder(data)
      .then((response) => {
        toast.update(tid, {
          render: "Sell order placed successfully !",
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
      })
      .catch((error) => {
        toast.update(tid, {
          render: error.response.data.message,
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      });
  };

  return (
    <div>
      <div
        className="modal fade"
        id={`sellmodal${id}`}
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog align-item-center" role="document">
          <div className="buyModal modal-content p-0">
            <div className="modal-header mt-3 border-0">
              <h3 className="modaltitle text-center" id="exampleModalLabel">
                {short_name} - {company_name}
              </h3>

              <div
                type="button"
                className="modalclosebtn close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span
                  className="closeModal fw-bold text-light"
                  aria-hidden="true"
                >
                  <h4>&times;</h4>
                </span>
              </div>
            </div>

            <div className="modal-body justify-content-center">
              <div className="details m-3 mt-0 ">
                <div className="row">
                  <div className="col-6">
                    <p className="mb-0 ipodetailtitle mt-3">Sell Price</p>
                    <div>
                      <input
                        className="stockquantity mt-2"
                        type="number"
                        onChange={(e) => setSell(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-6 text-end ">
                    <p className="mb-0 ipodetailtitle mt-3">Quantity</p>
                    <div>
                      <input
                        className="stockquantity mt-2"
                        type="number"
                        onChange={(e) => setQty(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div
              className="text-light mb-3 px-1"
              style={{ fontSize: "17px" }}
            >{`[Current holdings : 1000 shares]`}</div> */}
            <div
              className="text-warning mb-3 px-1"
              style={{ fontSize: "17px" }}
            >{`[Note : Current holdings 1000 shares]`}</div>
            <div className="modal-footer border-0 align-items-center">
              <button
                type="button"
                className="btn btn-danger mx-3 mb-4"
                onClick={handleBuy}
              >
                Sell
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellModal;