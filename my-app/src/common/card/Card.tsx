import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";

const Card: React.FC<{
  thumbnail: string;
  courseName: string;
  description: string;
  id?:number;
}> = ({ thumbnail, courseName, description,id }) => {
  const navigate = useNavigate();
  console.log(id,"id")
  return (
    <div className="card">
      <div className="card__header">
        <div className="card__header--img">
          <img src={thumbnail} alt="thumbnail" />
        </div>
      </div>

      <div className="card__body">
        <div className="card__title">{courseName}</div>
        <div className="card__desc">{description}</div>
      </div>

      <div className="card__footer">
        <button className="card__footer--status" onClick={()=>{
          navigate(`/courses/${id}`)
        }}>Start Learning</button>
      </div>
    </div>
  );
};

export default Card;
