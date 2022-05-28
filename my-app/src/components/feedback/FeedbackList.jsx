import React from "react";

import Feedback from "./Feedback";

const underReviewList = [
  {
    id: 1,
    name: "John Doe",
    course: "JavaScript",
    question: "How do you use a for loop in JavaScript?",
    answerLink: "wiujeghb.com",
  },
  {
    id: 2,
    name: "Jack Doe",
    course: "React",
    question: "How do you use a render props in React?",
    answerLink: "wiujeghb.com",
  },
  {
    id: 3,
    name: "Jill Doe",
    course: "Flutter",
    question: "Explain dynamic rendering in Flutter?",
    answerLink: "sagsheghb.com",
  },
];

const FeedbackList = () => {
  const feedBackListComponent = underReviewList.map((feedback) => (
    <Feedback
      key={feedback.id}
      studentName={feedback.name}
      course={feedback.course}
      question={feedback.question}
      solution={feedback.answerLink}
    />
  ));
  return <div>{feedBackListComponent}</div>;
};

export default FeedbackList;
