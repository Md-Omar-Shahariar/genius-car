import React from "react";
import google from "../../../images/social/google1.png";
import facebook from "../../../images/social/facebook.png";
import github from "../../../images/social/pngwing.com.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let errorElement;
  if (error || error1) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {error?.message}
          {error1.message}
        </p>
      </div>
    );
  }
  if (user || user1) {
    navigate("/home");
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50 "></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50 "></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => {
            signInWithGoogle();
          }}
          className="my-2 btn btn-primary w-50 d-block mx-auto"
        >
          <img style={{ width: "30px", height: "30px" }} src={google} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
        <button className="my-2 btn btn-primary w-50 d-block mx-auto">
          <img
            style={{ width: "30px", height: "30px" }}
            src={facebook}
            alt=""
          />
          <span className="px-2">Facebook Sign In</span>
        </button>
        <button
          onClick={() => {
            signInWithGithub();
          }}
          className="my-2 btn btn-primary w-50 d-block mx-auto"
        >
          <img style={{ width: "30px", height: "30px" }} src={github} alt="" />
          <span className="px-2">Github Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
