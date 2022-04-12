import React from "react";

const Button = ({ text, handleClick, handleReset, className }) => {
  return (
    <div className="button">
      <button
        onClick={
          text === "Approve" || text === "Reject" ? handleClick : handleReset
        }
        className={className}
        value={text}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
