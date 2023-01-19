import React, { useState } from "react";

function Login() {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");

  const loginOperator = (e) => {
    e.preventDefault();
    // Authentication to be added
  };

  return (
    <React.Fragment>
      <main
        id="loginSection"
        className="flex flex-col justify-center items-center h-screen border-[red]"
      >
        {/* Toaster to be added for messages */}
        <div className="login_container flex flex-col items-center w-full">
          <div className="flex flex-col justify gap-12 w-11/12 sm:w-3/4 md:w-1/2 lg:w-[40%]">
            <div className="flex text-4xl font-sans-serif font-semibold text-[color:var(--primary-color)] mx-auto">
              <p className="login_heading text-xl">Admin</p>
            </div>
            <div className="login_card relative px-10 border-t-4 border-[color:var(--primary-color)] border  rounded-tr-none rounded-sm form-signin-logo pt-12 pb-6 box-shadow">
              <form
                onSubmit={loginOperator}
                autoComplete="off"
                className="flex flex-col gap-4"
              >
                <div className="relative z-0 mb-1 w-full group">
                  <input
                    type="text"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    name="floating_email"
                    id="floating_email"
                    className="block pb-2 pt-5 px-2 w-full text-[#212020] bg-transparent border-transparent border border-b border-b-gray-600 appearance-none focus:outline-none focus:border-b-2 focus:border-[color:var(--primary-color)] focus:ring-0 peer text-xs font-semibold"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_email"
                    className={`${
                      Name?.length > 0 && "-translate-y-2"
                    } peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform scale-75 top-3 -z-10 origin-[0] left-2 peer-focus:text-[#212020] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2`}
                  >
                    Username
                  </label>
                  <i
                    className={`inputIcon fas fa-user absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500 peer-focus:text-[color:var(--primary-color)]`}
                  ></i>
                </div>
                <div className="relative z-0 mb-4 w-full group">
                  <input
                    type="password"
                    name="floating_password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="floating_password"
                    className="block pb-2 pt-5 px-2 w-full text-[#212020] border-transparent bg-transparent border border-b border-b-gray-600 appearance-none outline-none focus:ring-0 focus:border-[color:var(--primary-color)] focus:border-b-2 peer text-xs font-semibold"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_password"
                    className={`${
                      Password.length > 0 && "-translate-y-2"
                    } peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform scale-75 top-3 -z-10 origin-[0] left-2 peer-focus:text-[#212020] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2`}
                  >
                    Password
                  </label>
                  <i className="inputIcon fas fa-lock absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500 peer-focus:text-[color:var(--primary-color)]"></i>
                </div>
                <div className="flex w-full justify-end mt-4">
                  <button
                    type="submit"
                    id="loginBtn"
                    className="btn btn-success bg-[color:var(--primary-color)] text-white py-[0.38rem] px-2 rounded-[0.3rem] outline-none font-open-sans"
                  >
                    SIGN IN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Login;
