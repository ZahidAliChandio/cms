import React from "react";

const Login = () => {
  return (
    <div id="wrapper">
      <div id="loginpanel">
        <span className="name_of_ind">Admin Login</span>
        <form action="/admin_login" method="post">
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
            <img id="passwordlogo" src="/images/passwordlogo.svg" alt="" />
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
              value="Login as Admin"
            />
          </div>{" "}
          <a href="">Forget Password?</a>
        </form>
      </div>
      <div id="designerslogo">
        <img src="/images/Designer logo.svg" alt="" />
        <h4>&amp;copy 2022 All Rights Reserved</h4>
      </div>
    </div>
  );
};

export default Login;
