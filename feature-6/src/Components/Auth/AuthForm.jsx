import React from "react";
import "./Auth.css";

const AuthForm = ({ user, isLogin, onChange, onSubmit }) => {

  return (
    <form onSubmit={onSubmit} autoComplete="off">
    {!isLogin ? 
    <div>
        <div className="form-group">
          <label>First Name</label>
          <br />
          <input
            type="text"
            className="auth-input"
            id="first-name-input"
            value={user.firstName}
            onChange={onChange}
            name="firstName"
            placeholder="First Name"
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <br />
          <input
            type="text"
            className="auth-input"
            id="last-name-input"
            value={user.lastName}
            onChange={onChange}
            name="lastName"
            placeholder="Last Name"
            required
          />
        </div>{" "}
        </div> : <></>}
        <div>
        <div className="form-group">
          <label>Email</label>
          <br />
          <input
            type="email"
            className="auth-input"
            id="email-input"
            value={user.email}
            onChange={onChange}
            name="email"
            placeholder="Email"
            required
          />
        </div>{" "}
        <div className="form-group">
          <label>Password</label>
          <br />
          <input
            type="password"
            className="auth-input"
            id="password-input"
            value={user.password}
            onChange={onChange}
            name="password"
            placeholder="Password"
            min="0"
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="auth-button" onSubmit={onSubmit}>
            Submit
          </button>
        </div>
    </div>
  </form>
  );
};

export default AuthForm;