import React from "react";
import "./accordian.css";
import DownArrow from "../../assets/down-arrow.svg";
import { Link } from "react-router-dom";

const Accordian: React.FC<{
  id: number;
  topicName: string;
  videoUrl: string;
  testUrl: string;
}> = ({ id, topicName, videoUrl, testUrl }) => {
  return (
    <div className="accordian">
      <input type="checkbox" id={"label" + id} className="accordian__input" />
      <label htmlFor={"label" + id} className="accordian__label">
        <p>{topicName}</p>
        <img src={DownArrow} alt="" className="accordian__dropdown" />
      </label>
      <div className="accordian__content">
        <Link className="accordian__video" to={videoUrl}>
          <i className="bi bi-play-circle"></i> Video Link Goes Here
        </Link>
        <Link className="accordian__test-btn" to={testUrl}>
          <i className="bi bi-file-code"></i> Take Test
        </Link>
      </div>
    </div>
  );
};

export default Accordian;
