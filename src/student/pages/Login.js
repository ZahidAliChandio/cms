import React from "react";

const Login = () => {
  return (
    <div id="wrapper">
      <div id="loginpanel">
        <span className="name_of_ind">Student Login</span>
        <form action="/student_login" method="post">
          <div className="input username">
            <img id="usernamelogo" src="/images/usrnamelogo.svg" alt="" />
            <input
              id="username"
              type="text"
              name="studentName"
              placeholder="Username"
            />
          </div>
          <div className="input">
            <img id="passwordlogo" src="/images/passwordlogo.svg" alt="" />
            <input
              id="password"
              type="password"
              name="studentPassword"
              placeholder="Password"
            />
          </div>
          <div className="input submit">
            <input id="submitlogin" type="submit" name="" value="Login" />
          </div>{" "}
          <a href="">Forget Password?</a>
        </form>
      </div>
      <div id="designerslogo">
        <img src="/images/Designer logo.svg" alt="" />
        <h4>&copy 2022 All Rights Reserved</h4>
      </div>
    </div>
  );
};

export default Login;
