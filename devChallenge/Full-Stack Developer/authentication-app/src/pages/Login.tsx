import React from "react";

export function Login() {
  return (
    <div className="login-card-div">
        <div className="login-card-title">devChallenge</div>
        <span className="login-card-subtitle1">Login</span>
      <form className="login-card-form" action="">
        <input type="text" value={"test"} />
        <input type="text" value={"test"} />
        <button className="login-card-button-">Start coding now</button>
      </form>
      <span className="login-card-subtitle3">or continue with these social profile</span>
      <div className="login-card-icon-div">
        <div className="logic-card-social-icon">G</div>
        <div className="logic-card-social-icon">F</div>
        <div className="logic-card-social-icon">T</div>
        <div className="logic-card-social-icon">G</div>
      </div>
      <span className="login-card-subtitle4">Don’t have an account yet? Register? <a href="#" className="register-card-a">Register</a></span>
    </div>
  );
}
