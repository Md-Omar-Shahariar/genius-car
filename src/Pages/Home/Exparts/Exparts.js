import React from "react";
import expert1 from "../../../images/experts/expert-1.jpg";
import expert2 from "../../../images/experts/expert-2.jpg";
import expert3 from "../../../images/experts/expert-3.jpg";
import expert4 from "../../../images/experts/expert-4.jpg";
import expert5 from "../../../images/experts/expert-5.jpg";
import expert6 from "../../../images/experts/expert-6.png";
import Expart from "../Expart/Expart";

const experts = [
  { id: 1, Name: "Afridi1", img: expert1 },
  { id: 2, Name: "Afridi2", img: expert2 },
  { id: 3, Name: "Afridi3", img: expert3 },
  { id: 4, Name: "Afridi4", img: expert4 },
  { id: 5, Name: "Afridi5", img: expert5 },
  { id: 6, Name: "Afridi6", img: expert6 },
];

const Exparts = () => {
  return (
    <div className="container">
      <h2 className="text-primary text-center">Our Experts</h2>
      <div className="row">
        {experts.map((expert) => (
          <Expart expert={expert} key={expert.id}></Expart>
        ))}
      </div>
    </div>
  );
};

export default Exparts;
