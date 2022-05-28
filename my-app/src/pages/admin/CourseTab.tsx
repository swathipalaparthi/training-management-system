import React,{useState} from "react";

export const CourseTab = () => {
    const [errorMessages, setErrorMessages] = useState<{name:string,message:string}>({name:'',message:''});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const data = [
    {
        courseName: "",
        description: "",
        level:""
    },
  ];

  const errors = {
    description: "Required",
    courseName: "Required",
    level:"Required"
  };
  const { description, courseName,level } = document.forms?.length?document.forms[0]:{description:'', courseName:'',level:''};
  const handleSubmit = (event:any) => {
    //Prevent page reload
    event.preventDefault();

    if (!courseName||!description||!level) {
      if (!courseName) {
        setErrorMessages({ name: "courseName", message: errors.courseName });
      } else if (!description) {
        setErrorMessages({ name: "description", message: errors.description });
      }else if (!level) {
        setErrorMessages({ name: "level", message: errors.level });
      }else {
        setIsSubmitted(true);
      }
    } else {
        setIsSubmitted(true);
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name:string) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Course Name </label>
          <input type="text" name="courseName" />
          {renderErrorMessage("courseName")}
        </div>
        <div className="input-container">
          <label>Course Description</label>
          <input type="textarea" name="description" />
          {renderErrorMessage("description")}
        </div>
        <div className="input-container">
          <label>Course Level</label>
          <input type="select" name="level" />
          {renderErrorMessage("level")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="SecondTab">
        <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
    </div>
  );
};