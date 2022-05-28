import React from "react";
import "./userDashboard.css";
import Card from "../../common/card/Card";
import { courses } from "../../constants/courses";
import { useNavigate } from "react-router-dom";

const UserDashboard: React.FC = () => {
  const navigate = useNavigate();
  const assignedCourses = courses.filter(
    (course) => course.courseStatus !== "Completed"
  );

  const completedCourses = courses.filter(
    (course) => course.courseStatus === "Completed"
  );


  return (
    <div className="userDash">
      <div className="userDashLeft">
        <div className="userDash__courses">
          <div className="userDash__header">
            <h1 className="userDash__title">Assigned Courses</h1>
            {assignedCourses.length > 3 && (
              <button
                className="userDash__view-btn"
                onClick={() => {
                  navigate("/coursecategory/assigned");
                }}
              >
                View All
              </button>
            )}
          </div>
          <div className="userDash__container">
            {assignedCourses.length > 0 ? (
              assignedCourses.map((course, index) => {
                if (index < 3) {
                  return (
                    <Card
                      thumbnail={course.thumbnail}
                      courseName={course.courseName}
                      description={course.description}
                      
                    />
                  );
                }
              })
            ) : (
              <h1>You are not assigned to any course</h1>
            )}
          </div>
        </div>

        <div className="userDash__courses">
          <div className="userDash__header">
            <h1 className="userDash__title">All Available Courses</h1>
            {assignedCourses.length > 3 && (
              <button
                className="userDash__view-btn"
                onClick={() => {
                  navigate("/coursecategory/all");
                }}
              >
                View All
              </button>
            )}
          </div>
          <div className="userDash__container">
            {assignedCourses.length > 0 ? (
              assignedCourses.map((course, index) => {
                if (index < 3) {
                  return (
                    <Card
                      thumbnail={course.thumbnail}
                      courseName={course.courseName}
                      description={course.description}
                      
                    />
                  );
                }
              })
            ) : (
              <h1>You are not assigned to any course</h1>
            )}
          </div>
        </div>

        {completedCourses.length > 0 && (
          <div className="userDash__courses">
            <div className="userDash__header">
              <h1 className="userDash__title">Completed Courses</h1>
              {completedCourses.length > 3 && (
                <button
                  className="userDash__view-btn"
                  onClick={() => {
                    navigate("/coursecategory/completed");
                  }}
                >
                  View All
                </button>
              )}
            </div>
            <div className="userDash__container">
              {completedCourses.length > 0 ? (
                completedCourses.map((course, index) => {
                  if (index < 3) {
                    return (
                      <Card
                        thumbnail={course.thumbnail}
                        courseName={course.courseName}
                        description={course.description}
                        
                      />
                    );
                  }
                })
              ) : (
                <h1>You are not assigned to any course</h1>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="userDashRight">
        <h1 className="userDash__title">Upcoming Events</h1>
        <p>Lorem Ipsum!</p>
        <p>Lorem Ipsum!</p>
        <p>Lorem Ipsum!</p>
        <p>Lorem Ipsum!</p>
        <p>Lorem Ipsum!</p>
        <p>Lorem Ipsum!</p>
        <p>Lorem Ipsum!</p>
        <p>Lorem Ipsum!</p>
      </div>
    </div>
  );
};

export default UserDashboard;
