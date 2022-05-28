import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Popup from "./components/popup/Popup";
import Feedback from "./components/feedback/Feedback";
import FeedbackList from "./components/feedback/FeedbackList";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const mentors = [
    {
      id: "1",
      name: "Mentor 1",
    },
    {
      id: "2",
      name: "Mentor 2",
    },
    {
      id: "3",
      name: "Mentor 3",
    },
  ];

  const togglePopup = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      {/* <button onClick={togglePopup}>Show Popup menu</button>
      {isOpen && (
        <Popup
          onClose={() => togglePopup()}
          mentors={mentors}
          question="What is render props in reactjs ?"
        />
      )} */}


      <FeedbackList />
      
    </div>
  );
}

export default App;
