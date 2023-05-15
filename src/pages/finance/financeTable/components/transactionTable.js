import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/style.css";

import Tablecomponent from "./tablecomponent";

import { useSelector } from "react-redux";
import { Cookies } from "react-cookie";

export default function Transactiontable() {
  const navigate = useNavigate();
  const cookie = new Cookies();
  const transaction_redux = useSelector((state) => state.transaction);

  console.log(transaction_redux, "TABLE>>>>>>>>>>>");

  const [transactions, setTransaction] = useState(transaction_redux);
  const [groupData, setGroupData] = useState({});

  useEffect(() => {
    console.log("table component EFFECT >>>");
    setTransaction(transaction_redux);
  }, [transaction_redux]);

  console.log(transactions, "IN PARENT");
  const [isGroup, setIsGroup] = useState(false);
  const [groupVal, setGroupVal] = useState("");

  useEffect(() => {
    if (isGroup === true) {
      handleChange(groupVal);
    }
  }, [transactions]);

  const handleChange = (e) => {
    let groupedMap = {};
    let cloneTransaction = [...transactions];
    setIsGroup(true);
    if (e.target) {
      const group = e.target.value;
      setGroupVal(group);

      if (group !== "") {
        for (const key of cloneTransaction) {
          if (groupedMap.hasOwnProperty(key[group])) {
            groupedMap[key[group]].push(key);
          } else {
            groupedMap[key[group]] = [key];
          }
        }
        setGroupData(groupedMap);
      } else {
        console.log("object");
        setGroupData([]);
      }
    } else {
      if (e) {
        for (const key of cloneTransaction) {
          if (groupedMap.hasOwnProperty(key[e])) {
            groupedMap[key[e]].push(key);
          } else {
            groupedMap[key[e]] = [key];
          }
        }
        setGroupData(groupedMap);
      } else {
        console.log("object");
        setGroupData([]);
        // setIsGroup(false);
      }
    }
  };

  const logout = () => {
    const status = window.confirm("Are you sure for logout?");
    if (status) {
      cookie.remove("token");
      navigate("/login");
    }
  };

  return (
    <>
      <div>
        <Link to={"createTransaction"}>
          <button type="button" className="btn btn-primary my-2">
            Create Transaction
          </button>
        </Link>
      </div>

      {transactions.length > 0 ? (
        <div className="container-fluid">
          <div className="topBarWrapper">
            <div>
              <select
                className="btn btn-primary mx-5"
                name=""
                onChange={handleChange}
              >
                <option value="">None</option>
                <option value="tran_month">Month Year</option>
                <option value="tran_type">Transaction Type</option>
                <option value="tran_from">From Account</option>
                <option value="tran_to">To Account</option>
              </select>
            </div>
            <div>
              <button
                type="button"
                onClick={() => logout()}
                className="btn btn-primary logOutbtn"
              >
                LOGOUT
              </button>
            </div>
          </div>
          <Tablecomponent transactions={transactions} />
          {Object.keys(groupData).map((item) => {
            console.log(item);
            console.log("hello group", item, groupData[item]);
            return <Tablecomponent transactions={groupData[item]} />;
          })}
        </div>
      ) : (
        <span>No data Found</span>
      )}
    </>
  );
}
