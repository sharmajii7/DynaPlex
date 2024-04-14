import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./style.scss";

const CircleRating = ({ rating }) => {
  return (
    <div className="circleRating" style={{ backgroundColor: "black" }}>
      <CircularProgressbar
        value={rating}
        maxValue={10}
        // rating out of 10
        text={rating}
        styles={buildStyles({
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
          // colours represent rating of movie
          textColor: "white", // Set text color to white
          trailColor: "transparent",
        })}
      />
    </div>
  );
};

export default CircleRating;
