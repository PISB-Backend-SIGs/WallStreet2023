import React from "react";
import { useState } from "react";
import { UseAuthContext } from "../Hooks/UseAuthContext";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { subscribeIpo } from "../Utils/Apis";

const Modal = ({
  id,
  company,
  company_name,
  high_cap,
  low_cap,
  lot_allowed,
  total_volume,
  red_herring_prospectus,
  description,
}) => {

  const { user } = UseAuthContext()
  const [qty, setQty] = useState(0);
  const [bid, setBid] = useState(0);

  const handleSubscribe = (e) => {
    e.preventDefault()
    if(!user){
      toast.error('You must be logged in to perform this action', {
        position: toast.POSITION.TOP_RIGHT,
        theme: "dark",
      })
    }else{
      const data = {
        company: company,
        quantity: qty,
        offer_bid: bid
      }
      subscribeIpo(data)
      .then((response) => {
        toast.success('Ipo subscribed successfully')
        return response.data;
      })
      .catch((error) => {
        console.error(error);
        toast.error('Error occured')
      });
    }
  }

  return (
    <div
      className="modal fade"
      id={`modal${id}`}
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog align-item-center" role="document">
        <div className="ipoModal modal-content">
          <div className="modal-header mt-3 border-0">
            <h3 className="modaltitle text-center" id="exampleModalLabel">
              {company_name}
            </h3>

            <div
              type="button"
              className="modalclosebtn close m-2"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </div>
          </div>

          <div className="modal-body justify-content-center">
            <div className="modalcontent mx-3">{description}</div>

            <div className="details m-3 mt-4">
              <div className="row">
                <div className="col-6">
                  <p className="mb-0 ipodetailtitle mt-2">Price Band</p>
                  <p className="mt-0">
                    {low_cap}-{high_cap}
                  </p>

                  <p className="mb-0 ipodetailtitle mt-4">Quantity</p>
                  <div>
                    <input className="stockquantity mt-1" type="number" onChange={(e) => setQty(e.target.value)} value={qty}/>
                  </div>
                </div>
                <div className="col-6 text-end ">
                  <p className="mb-0 ipodetailtitle mt-2">Avl. qty</p>
                  <p className="mt-0">{total_volume}</p>

                  <p className="mb-0 ipodetailtitle mt-4">Offer bid</p>
                  <div>
                    <input className="stockquantity mt-1" type="number" onChange={(e) => setBid(e.target.value)} value={bid}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer border-0 align-items-center">
            <button
              type="button"
              className="btn btn-primary mx-3 mb-4 bi bi-eye"
              onClick={() => window.open(`${red_herring_prospectus}`)}
            >
              {" "}
              View Report{" "}
            </button>
            <button type="button" className="btn btn-success mx-3 mb-4" onClick={handleSubscribe}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
