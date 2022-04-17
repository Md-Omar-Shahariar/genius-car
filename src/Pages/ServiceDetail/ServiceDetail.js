import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const a = useParams();
  console.log(a);
  console.log(serviceId);
  return (
    <div>
      <h2>Welcome to Detail {serviceId}</h2>
      <div>
        <Link to={"/checkout"}>
          <button className="btn btn-primary">Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
