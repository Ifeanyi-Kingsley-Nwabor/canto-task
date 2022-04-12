import React from "react";
import approve from "../images/tu4.png";
import reject from "../images/td2.png";

const Icons = ({ action }) => {
  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center">
        <div className="row">
          <div className="col message">
            {action === "Approve" ? (
              <h1
                style={{
                  color: "white",
                }}
              >
                Welcome to your New Challenge!!!
              </h1>
            ) : (
              <div>
                <h1
                  style={{
                    color: "black",
                  }}
                >
                  Sorry, Still need some more learning to do...
                </h1>
                <h4 className="learn-react">
                  Learn{" "}
                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    React
                  </a>
                </h4>
              </div>
            )}
          </div>
          {action && (
            <img
              style={{
                maxWidth: "300px",
              }}
              className="icon col"
              src={action === "Approve" ? approve : reject}
              alt={action}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Icons;
