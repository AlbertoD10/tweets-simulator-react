import React from "react";
import TwitterLogo from "../../assets/imgs/twitter-logo.png";
import "./header.scss";

export default function Header() {
  return (
    <div className="header">
      <img src={TwitterLogo} alt="Tweets Simulator" />
      <h1> Tweets Simulator</h1>
    </div>
  );
}
