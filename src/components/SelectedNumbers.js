import React from "react";
import { IoCloseCircleSharp } from "react-icons/io5";

const SelectedNumbers = (props) => {
  return (
    <div>
      <div>
        <div>
          <h4>Number Selected</h4>
          {props.numbers.map((number, index) => (
            <div key={index}>
              <p>Mark:{number}</p>
              <IoCloseCircleSharp
                onClick={() => props.onRemoveNumber(number)}
              />
            </div>
          ))}
          <h3>Total: ${props.total}</h3>
        </div>
      </div>
    </div>
  );
};

export default SelectedNumbers;
