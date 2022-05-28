import React,{useState} from "react";

export const EventsTab = () => {
    const [errorMessages, setErrorMessages] = useState<{name:string,message:string}>({name:'',message:''});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const data = [
    {
        eventName: "",
        eventLink: "",
        eventDate:"",
    },
  ];

  const errors = {
    eventName: "Required",
        eventLink: "Required",
        eventDate:"Required",
  };
  const { eventLink, eventName,eventDate } = document.forms.length?document.forms[0]:{eventLink:'', eventName:'',eventDate:''};
  const handleSubmit = (event:any) => {
    //Prevent page reload
    event.preventDefault();

    if (!eventName||!eventLink||!eventDate) {
      if (!eventName) {
        setErrorMessages({ name: "eventName", message: errors.eventName });
      } else if (!eventLink) {
        setErrorMessages({ name: "eventLink", message: errors.eventLink });
      }else if (!eventDate) {
        setErrorMessages({ name: "eventDate", message: errors.eventDate });
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
          <input type="text" name="eventName" />
          {renderErrorMessage("eventName")}
        </div>
        <div className="input-container">
          <label>Course eventLink</label>
          <input type="text" name="eventLink" />
          {renderErrorMessage("eventLink")}
        </div>
        <div className="input-container">
          <label>Course eventDate</label>
          <input type="date" name="eventDate" />
          {renderErrorMessage("eventDate")}
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