import React, { useEffect, useState } from "react";
import Service from "../Srevice/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container mt-5" id="services">
      <h1 style={{ textAlign: "center", color: "goldenrod" }}>Our Services</h1>
      <div className="services-container">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
