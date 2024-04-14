// entire file is just static html

import React from "react";
// importing icons
import { FaGithub } from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  const handleClick = () => {
    window.open("https://github.com/majisouvik26/Recommender_System", "_blank");
  };

  return (
    <footer className="footer">
      <ContentWrapper>
        <div className="infoText">
          Created by Dishit Sharma (B22CS082) and Souvik Maji (B22CS089) &copy;
          2024.
        </div>
        <div className="socialIcons">
          Source Code:
          <span className="icon" onClick={handleClick}>
            <FaGithub />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;

{
  /* <footer class="footer">
    <div class="container">
        <p>Created by Your Name &copy; 2024. <a href="https://github.com/yourusername/yourproject" target="_blank">View source code on GitHub <img src="github_logo.png" alt="GitHub Logo" width="20"></a></p>
    </div>
</footer> */
}
