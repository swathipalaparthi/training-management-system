import React from "react";
import Accordian from "../../common/accordian/Accordian";
import { courseContent } from "../../constants/courseContent";
import "./courseDetails.css";

const CourseDetails = () => {
  return (
    <div className="course">
      <div className="course__header">
        <div className="course__title">
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
            eos.
          </h1>
          <button className="course__start-learning">Start Learning</button>
        </div>
        <div className="course__progress">
          <h1>100%</h1>
          <p>Completed</p>
        </div>
      </div>

      <hr />

      <div className="course__body">
        <div className="course__description">
          <h2>Course Details</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel enim
            aperiam necessitatibus fugiat possimus, repellendus odio rerum dicta
            nemo architecto non a doloribus illo doloremque culpa delectus
            assumenda sapiente eius perferendis esse maxime quis. Maiores ullam
            corporis libero nam accusamus illo excepturi, optio placeat unde
            dolorem consequatur sapiente blanditiis doloremque.
          </p>
        </div>

        <div className="course__lectures">
          <h2>List of Topics</h2>
          <div className="course__container">
            {courseContent.map((topic) => (
              <Accordian
                key={topic.id}
                id={topic.id}
                topicName={topic.topicName}
                videoUrl={topic.videoUrl}
                testUrl={topic.testUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
