import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../css/style.css";

import { useSelector } from "react-redux";

export default function Displayuser() {
  const { id } = useParams();

  const transaction_redux = useSelector((state) =>
    state.transaction.find((singleTran) => singleTran.tran_id == id)
  );

  const transDetail = [transaction_redux];

  return (
    <div>
      <form className="user_form">
        <Link to={"/displayData"}>
          <button type="button" className="btn btn-primary my-4">
            Go To Transaction Hisotry
          </button>
        </Link>
        <fieldset disabled>
          <legend>Your Transaction</legend>
          {transDetail.map((item) => {
            return (
              <div key={id}>
                <div className="row">
                  <div className="col mb-3">
                    <label
                      htmlFor="disabledTextInput"
                      className="fw-bold form-label"
                    >
                      Transaction Date
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={item.tran_date}
                      aria-label="First name"
                    />
                  </div>
                  <div className="col mb-3">
                    <label
                      htmlFor="disabledTextInput"
                      className="fw-bold form-label"
                    >
                      Month Year
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      value={item.tran_month}
                      aria-label="Last name"
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="disabledTextInput"
                      className="fw-bold form-label"
                    >
                      Transaction Type
                    </label>

                    <input
                      type="text"
                      id="disabledTextInput"
                      className="form-control"
                      value={item.tran_type}
                    />
                  </div>
                  <div className="col mb-3">
                    <label
                      htmlFor="disabledTextInput"
                      className="fw-bold form-label"
                    >
                      From Account
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={item.tran_from}
                      aria-label="First name"
                    />
                  </div>
                  <div className="col mb-3">
                    <label
                      htmlFor="disabledTextInput"
                      className="fw-bold form-label"
                    >
                      To Account
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      value={item.tran_to}
                      aria-label="Last name"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="disabledTextInput"
                      className="fw-bold form-label"
                    >
                      Amount
                    </label>
                    <input
                      type="text"
                      id="disabledTextInput"
                      className="form-control"
                      value={item.tran_amount}
                    />
                  </div>
                  <div className="col mb-3">
                    <label
                      htmlFor="disabledTextInput"
                      className="fw-bold htmlForm-label"
                    >
                      Receipt
                    </label>
                    <div>
                      <img
                        src={item.tran_receipt}
                        className="img-thumbnail"
                        alt="..."
                        width="150"
                      />
                    </div>
                  </div>
                  <div className="col mb-3">
                    <label
                      htmlFor="disabledTextInput"
                      className="fw-bold form-label"
                    >
                      Notes
                    </label>
                    <input
                      type="text"
                      id="disabledTextInput"
                      className="form-control"
                      value={item.tran_note}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </fieldset>
      </form>
    </div>
  );
}
