// import "./Slip.css";
import React, { useEffect, useState } from "react";

import axios from "axios";

// Make a GET request to the backend route with the regId as a query parameter
// axios
//   .get(`http://localhost:5000/api/formAuth/formusers?regId=${regId}`)
//   .then((response) => {
//     // Handle the response from the backend
//     console.log(response.data);
//   })
//   .catch((error) => {
//     // Handle any errors
//     console.error(error);
//   });

// Fetch form users

// const regId = localStorage.getItem("regId");

const fetchFormUsers = async () => {
  try {
    const response = await axios.get(
      // `http://localhost:5000/api/formAuth/formusers?regId=${regId}`
      "http://localhost:5000/api/formAuth/formusers"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

function Slip() {
  const [formUsers, setFormUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await fetchFormUsers();
      if (users) {
        setFormUsers(users);
      }
    };

    fetchUsers();
  }, []);

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

        {formUsers.map((user) => (
          <div key={user._id} className="mt-4 row justify-content-left">
            <div className="border-right border-dark col-2">
              <p>
                Name: {user.firstname} {user.middlename} {user.surname}
              </p>
            </div>
            <div className="col-2">
              <p>
                Valid from <span>{user.periodFrom}</span> to{" "}
                <span>{user.periodTo}</span>
              </p>
            </div>
            <div className="col-2">
              <p>Duration: {user.duration}</p>
            </div>
          </div>
        ))}

        {formUsers.map((user) => (
          <div key={user._id} className="mt-2 row justify-content-left">
            <div className="col-2">
              <p>Class type: {user.class1}</p>
            </div>
            <div className="col-2">
              <p>Category: {user.category}</p>
            </div>
          </div>
        ))}

        {formUsers.map((user) => (
          <div key={user._id} className="mt-2 row justify-content-left">
            <div className="col-3">
              <p>Ticket Number: {user.ticketNo}</p>
            </div>
            <div className="col-2">
              <img
                src="./Approved.png"
                style={{ height: "100%", width: "150%" }}
                alt="Approved"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slip;
