import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="mt-5 text-center">
      <footer>
        <p>
          <small>copyright &copy; {year}</small>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
