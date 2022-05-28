import React, { useState } from "react";

import "./Popup.css";

type PopupProps = {
  onClose: () => void;
  mentors: { id: string; name: string }[];
  question: string;
};

const Popup = ({ onClose, mentors, question }: PopupProps) => {
  const dropdownOptions = mentors.map((mentor) => (
    <option value={mentor.id} key={mentor.id}>
      {mentor.name}
    </option>
  ));

  const [files, setFiles] = useState<FileList | null>(null);

  const onSubmitHandler = () => {
    if (!files) {
      return;
    }

    console.log(files[0].name);
    console.log(files[0]);
  };
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={onClose}>
          x
        </span>
        <select name="mentor" id="mentor" className="mentor-dropdown">
          {dropdownOptions}
        </select>

        <p className="question">{question}</p>
        <div className="file-upload">
          <label htmlFor="file">
            <input
              type="file"
              name="file"
              id="file"
              onChange={(event) => setFiles(event.target.files)}
            />{" "}
            Upload a file
          </label>
        </div>

        {files && <div className="uploaded-file">{files[0].name}</div>}
        <button className="submit-button" onClick={onSubmitHandler}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Popup;
