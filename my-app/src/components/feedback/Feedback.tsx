import React, { useState } from "react";

import "./Feedback.css";
import "../popup/Popup.css";
import ArrowDown from "../../assets/down-arrow.svg";

type feedbackProps = {
  studentName: string;
  course: string;
  question: string;
  solution: string;
};

const Feedback = ({
  studentName,
  course,
  question,
  solution,
}: feedbackProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isEditable, setEditable] = useState(true);

  const handleOnExpand = () => {
    setIsOpen((prevState) => !prevState);
  };

  const onSubmitFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("***********  FORM SUBMITTED ***********");
    console.log(event);
    setEditable(false);
  };

  const imageClasses = isOpen ? "rotate" : "";
  return (
    <div className="accordian">
      <div className="accordian-title">
        <div className="name">{studentName}</div>
        <div className="end-heading">
          <div className="course">{course}</div>
          <img
            src={ArrowDown}
            alt="arrow-down"
            onClick={handleOnExpand}
            className={imageClasses}
          />
        </div>
      </div>

      {isOpen && (
        <div className="accordian-content">
          <hr />
          <p className="question">{question}</p>
          <p className="solution-link">{solution}</p>
          <form onSubmit={(event) => onSubmitFormHandler(event)}>
            <div className="rating-section">
              <label htmlFor="marks">Points : </label>
              <input
                type="number"
                name="marks"
                id="marks"
                className="points-input"
                pattern="/^[0-9]*$/"
                min="0"
                max="25"
                readOnly={!isEditable}
                required
              />
              <p className="end-points">/25</p>
            </div>

            {isEditable && (
              <button type="submit" className="submit-button button ">
                Submit
              </button>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default Feedback;
