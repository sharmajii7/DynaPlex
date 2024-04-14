import React from "react";
import "./style.scss";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <span className="pageTitle">
        <div>Error 404: Something went wrong.</div>
        <br></br>
        <div>Suggestions:</div>
        <ul>
          <li>Try refreshing the page. </li>
          <li>Go back to the previous page. </li>
        </ul>
      </span>
    </div>
  );
};

export default PageNotFound;
