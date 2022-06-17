import React from "react";
import Logo from "../pictures/123.png";
const MoneyButtons = (props) => {
  return (
    <>
      <div>
        <img src={Logo} />
        <div class="row gy-5 cashNumber">
          <div class="col-6">
            <button
              className="moneyButtons"
              key={1}
              onClick={() => props.onAddMoney(1)}
              disabled={props.isDisabled}
            >
              1
            </button>
            <button
              className="moneyButtons"
              key={2}
              onClick={() => props.onAddMoney(5)}
              disabled={props.isDisabled}
            >
              5
            </button>
          </div>
        </div>
        <div class="row gy-5">
          <div class="col-6">
            <button
              className="moneyButtons"
              key={3}
              onClick={() => props.onAddMoney(10)}
              disabled={props.isDisabled}
            >
              10
            </button>
            <button
              className="moneyButtons"
              key={4}
              onClick={() => props.onAddMoney(20)}
              disabled={props.isDisabled}
            >
              20
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoneyButtons;
