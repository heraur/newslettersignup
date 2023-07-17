import React from "react";
import image from "../assets/images/illustration_sign_up_desktop.svg";

const Newsletter = () => {
  return (
    <div className="container">
      <div className="left-text">
        <h5> Stay updated!</h5>
        <p> Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className="listileft">
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li> And much more!</li>
        </ul>
        <form>
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email@company.com"
          />
          <button>Subscribe to monthly newsletter</button>
        </form>
      </div>

      <div className="right-img">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Newsletter;
