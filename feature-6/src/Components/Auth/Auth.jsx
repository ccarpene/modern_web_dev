import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { checkUser } from "./AuthService";
import "./Auth.css";

const AuthModule = () => {
  const navigate = useNavigate();

  // redirect already authenticated users back to home
  useEffect(() => {
    if (checkUser()) {
      alert("You are already logged in");
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="auth-container">
      <Link to="/auth/register">
        <button className="auth-button">Register</button>
      </Link>
      <br />
      <br />
      <Link to="/auth/login">
        <button className="auth-button">Login</button>
      </Link>
    </div>
  );
};

export default AuthModule;
