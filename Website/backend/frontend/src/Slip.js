// import "./Slip.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Slip.css";

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
    <div className="h-screen flex justify-center items-center ">
      <div className="center-rectangle">
        <div className="rectangle">
          <div id="centerthis ">
            <div className="container">
              {/* // */}
              <div className="d-flex justify-content-center">
                <div className="center-table">
                  <table border="0" cellSpacing="0" cellPadding="0">
                    <tr>
                      <td className="image-cell" valign="top" bgcolor="#ffe77b">
                        <img
                          src="https://img.collegepravesh.com/2016/01/VJTI-Mumbai-Logo.png"
                          style={{
                            height: "100%",
                            width: "100%",
                            transform: "rotate(0deg)",
                          }}
                          alt=""
                        />
                      </td>
                      <td className="text-cell" bgcolor="#ffe77b">
                        <h2>Railway Concession Slip</h2>
                        <p>
                          Veermata Jijabai Technological Institute, Matunga,
                          Mumbai
                          <br />
                          <a href="http://vjti.ac.in">http://vjti.ac.in</a> |
                          vjti@institute.com +915 7 789-1234
                        </p>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="center-table">
                <div className="mt-4 row justify-content-left">
                  {formUsers.map((user) => (
                    <div
                      key={user._id}
                      className="mt-4 row justify-content-left"
                    >
                      <div className="border-right border-dark col-2">
                        <p>
                          Name: {user.firstname} {user.middlename}{" "}
                          {user.surname}
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
                </div>
              </div>

              <div className="center-table">
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
              </div>

              <div className="center-table">
                <div className="mt-2 row justify-content-left">
                  <div className="col-3">
                    <p>Ticket Number: </p>
                  </div>
                  <div className="col-2">
                    {/* <img
              src="./Approved.png"
              style={{ height: "100%", width: "150%" }}
              alt="Approved"
            /> */}
                    <div className="col-2 flex">
                      <img
                        // src="https://www.onlygfx.com/wp-content/uploads/2016/09/green-approved-stamp-3.png"
                        src="https://www.pngplay.com/wp-content/uploads/6/Green-Approved-Vector-Transparent-PNG.png"
                        style={{
                          height: "30%",
                          width: "25%",
                          marginTop: "-100px",
                          marginLeft: "400px",
                          transform: "rotate(0deg)",
                        }}
                        // style={{
                        //   height: "15%",
                        //   width: "20%",
                        //   marginTop: "-15px",
                        //   marginLeft: "10px",
                        //   transform: "rotate(0deg)",
                        // }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slip;
