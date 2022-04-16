import React from "react";
import sleep from "../../src/images/sleep.jpg";

const NotFound = () => {
  return (
    <div>
      <h2 className="text-primary text-center">Mechanic is Sleeping</h2>
      <img className="w-100" src={sleep} alt="" />
    </div>
  );
};

export default NotFound;
