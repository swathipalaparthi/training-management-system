import React, { useState } from "react";
import "./courseCategory.css";
import Card from "../../common/card/Card";
import { useParams } from "react-router-dom";
import { courses } from "../../constants/courses";

const TITLES = [
  "All Your Assigned Courses Goes Here",
  "All Your Completed Courses Goes Here",
  "All Your Courses Goes Here",
];

const CourseCategory = () => {
  let title: string = "";
  const { category } = useParams();
  let data: any;

  if (category === "assigned") {
    title = TITLES[0];
    data = courses.filter((course) => course.courseStatus !== "Completed");
  } else if (category === "completed") {
    title = TITLES[1];
    data = courses.filter((course) => course.courseStatus === "Completed");
  } else {
    title = TITLES[2];
  }

  return (
    <div className="courseCat">
      <h1 className="courseCat__title">{title}</h1>

      <div className="courseCat__container">
        {data.map((course: any) => (
          <Card
            thumbnail={course.thumbnail}
            courseName={course.courseName}
            description={course.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseCategory;
