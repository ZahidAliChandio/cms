import React from "react";

const AddDashboard = () => {
  return (
    <div id="wrapper">
      <div id="leftsection">
        <div id="designerslogo">
          <img src="images/Designer logo.svg" alt="" />
        </div>
        <ul>
          <li>
            <span>
              <img src="images/home icon.svg" alt="" />
            </span>{" "}
            Modify Users DB
          </li>
          <li>
            <span>
              <img src="images/profile icon.svg" alt="" />
            </span>
            Modify Faculty DB
          </li>
        </ul>
      </div>
      <div id="middlesection">
        <h1>Department of Computer Software Engineering, MCS</h1>
        <div className="database_view">
          <div className="navbar_student">
            <ul>
              <li>
                <a href="#add">Add Student</a>
              </li>
              <li>
                <a href="#remove">Remove Student</a>
              </li>
              <li>
                <a href="#">Update Student Details</a>
              </li>
            </ul>
          </div>
          <div className="modify_section">
            <div id="add">
              <form action="/admin/modify_db" method="post">
                <div className="input username">
                  <img id="usernamelogo" src="/images/usrnamelogo.svg" alt="" />
                  <input
                    id="username"
                    type="text"
                    name="userName"
                    placeholder="Username"
                  />
                </div>
                <div className="input">
                  <img
                    id="passwordlogo"
                    src="/images/passwordlogo.svg"
                    alt=""
                  />
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <div className="input submit">
                  <input
                    id="submitlogin"
                    type="submit"
                    name=""
                    value="Add User"
                  />
                </div>
              </form>
            </div>
            <div id="remove"></div>
            <div id="update"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDashboard;
