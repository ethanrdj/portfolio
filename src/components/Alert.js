import React from "react";

const Alert = ({ alertMessage }) => {
  return (
    <div className="Alert">
      <p className="alert-message">{alertMessage}</p>
    </div>
  );
};

export default Alert;
