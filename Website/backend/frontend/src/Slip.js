// import "./Slip.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Slip() {
  return (
    <div id="centerthis">
      <div className="container">
        <div className="d-flex justify-content-center">
          <table width="50%" border="0" cellSpacing="0" cellPadding="0">
            <tr>
              <td
                align="left"
                valign="top"
                bgcolor="#ffe77b"
                style={{ backgroundColor: "#fff" }}
              >
                <img height="100" width="100" src="logo.webp" alt="" />
              </td>
              <td
                align="left"
                bgcolor="#ffe77b"
                style={{ backgroundColor: "#fff" }}
              >
                <h2 style={{ fontWeight: 900, color: "brown" }}>
                  Railway Concession Slip
                </h2>
                <p>
                  Veermata Jijabai Technological Institute, Matunga, Mumbai
                  <br />
                  http://vjti.ac.in | vjti@institute.com +915 7 789-1234
                </p>
              </td>
            </tr>
          </table>
        </div>

        <div className="mt-4 row justify-content-left">
          <div className="border-right border-dark col-2">
            <p>Name: </p>
          </div>
          <div className="col-2">
            <p>
              Valid from <span></span> to <span></span>
            </p>
          </div>
          <div className="col-2">
            <p>Duration:</p>
          </div>
        </div>
        <div className="mt-2 row justify-content-left">
          <div className="col-2">
            <p>Class type: </p>
          </div>
          <div className="col-2">
            <p>Type: </p>
          </div>
          <div className="col-2">
            <p>Category:</p>
          </div>
        </div>
        <div className="mt-2 row justify-content-left">
          <div className="col-3">
            <p>Ticket Number: </p>
          </div>
          <div className="col-2">
            <img
              src="./Approved.png"
              style={{ height: "100%", width: "150%" }}
              alt="Approved"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slip;
