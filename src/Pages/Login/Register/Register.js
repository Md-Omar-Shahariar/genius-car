import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { async } from "@firebase/util";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };

  if (user) {
    console.log(user);
  }
  const handleRegister = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const name = event.target.name.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checked;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    alert("Updated profile");
    navigate("/home");
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

        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />
        <label
          className={`ps-2 ${agree ? "text-primary" : "text-danger"}`}
          htmlFor="terms"
        >
          Terms And Condition
        </label>
        <br />
        <input
          disabled={!agree}
          className="btn btn-primary w-50 mx-auto"
          type="submit"
          value="Register"
        />
      </form>
      <p>
        Already have an Account?{" "}
        <Link
          to={"/login"}
          className=" text-danger text-decoration-none pe-auto"
          onClick={navigateLogin}
        >
          Please Register
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
