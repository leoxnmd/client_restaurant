import React, { useState } from "react";
import loginService from "../../service/login/loginService";
import { useHistory } from "react-router-dom";
import { FaLock } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const login = await loginService.getLogin({
      email,
      password,
    });
    console.log(login);
    const loginFail = "errorCodes" in login;
    if (!loginFail) {
      history.push("/");
    }
  };

  return (
    <div className="bg-light d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card shadow">
              <div className="card-body">
                <h3 className="card-title mb-4">Login</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <div className="input-group">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-outline-secondary reveal"
                          type="button"
                        >
                          <FaLock
                            fontSize="20px"
                            style={{ cursor: "pointer" }}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="remember-me"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="remember-me"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Login
                  </button>
                </form>
                <hr />
                <p className="text-center">
                  Don't have an account? <a href="#">Sign up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
