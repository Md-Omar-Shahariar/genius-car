import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("./login");
  };
  const handleRegister = (event) => {
    event.preventDefault();
    console.log(event.target.email.value);
  };
  return (
    <div className="register-form">
      <h2 className="text-primary text-center mt-5">This is Register</h2>
      <form onSubmit={handleRegister} action="">
        <input type="text" name="name" placeholder="Name" />
        <br />
        <input required type="email" name="email" id="" placeholder="Email" />
        <br />
        <input
          required
          placeholder="Password"
          type="password"
          name="password"
        />
        <br />
        <input type="submit" value="Register" />
      </form>
      <p>
        Already have an Account?{" "}
        <Link
          to={"/login"}
          className="text-danger text-decoration-none pe-auto"
          onClick={navigateLogin}
        >
          Please Register
        </Link>
      </p>
    </div>
  );
};

export default Register;
