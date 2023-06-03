import React from "react";
import "../../Assets/css/footer.css";
const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerGrid">
        <div className="footerColumn">
          <h3 className="columnTitle">CONTACT US</h3>
          <ul className="columnList">
            <li className="listItemColumn">Email: basit.sardar.comsian@gmail.com</li>
            <li className="listItemColumn">Call us: 0345-9812889</li>
            <li className="listItemColumn">whatsapp: 0345-9812889</li>
          </ul>
        </div>
        <div className="footerColumn">
          <h3 className="columnTitle">CUSTOMER CARE</h3>
          <ul className="columnList">
            <li className="listItemColumn">My Account</li>
            <li className="listItemColumn">Terms of Service</li>
            <li className="listItemColumn">Track your order</li>
            <li className="listItemColumn">Contact Us</li>
          </ul>
        </div>
        <div className="footerColumn">
          <h3 className="columnTitle">INFORMATION</h3>
          <ul className="columnList">
            <li className="listItemColumn">About Us</li>
            <li className="listItemColumn">FAQs</li>
            <li className="listItemColumn">FAQs</li>
          </ul>
        </div>
       
      </div>
      <h2 className="copyright">©2023 All rights reserved.</h2>
    </footer>
  );
};

export default Footer;
