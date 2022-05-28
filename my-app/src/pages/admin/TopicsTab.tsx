import React,{useState} from "react";

export const TopicsTab = () => {
    const [errorMessages, setErrorMessages] = useState<{name:string,message:string}>({name:'',message:''});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const data = [
    {
        courseName: "",
        description: "",
        level:"",
        category:'',
        courseLink:''
    },
  ];

  const errors = {
    description: "Required",
    courseName: "Required",
    category:'Required',
    courseLink:'Required'

  };
  const { description, courseName,category,courseLink } = document.forms?.length?document.forms[0]:{description:'', courseName:'',category:'',courseLink:''};
  const handleSubmit = (event:any) => {
    //Prevent page reload
    event.preventDefault();

    if (!courseName||!description||!category||!courseLink) {
      if (!courseName) {
        setErrorMessages({ name: "courseName", message: errors.courseName });
      } else if (!description) {
        setErrorMessages({ name: "description", message: errors.description });
      }else if (!category) {
        setErrorMessages({ name: "category", message: errors.category });
      }else if (!courseLink) {
        setErrorMessages({ name: "courseLink", message: errors.courseLink });
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
          <label>Category </label>
          <input type="text" name="category" />
          {renderErrorMessage("category")}
        </div>
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
          <label>Course Link</label>
          <input type="file" name="link" />
          {renderErrorMessage("link")}
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