import React from "react";

const LotteryNumbers = (props) => {
  let lotteryNumbersButtons = [];
  for (let i = 1; i < 21; i++) {
    lotteryNumbersButtons.push(
      <button
        className={props.numbers.includes(i) ? "selected" : ""}
        key={i}
        onClick={() => props.onAddNumber(i)}
        disabled={props.isDisabled ? true : props.numbers.includes(i)}
      >
        {i}
      </button>
    );
  }
  return (
    <div className="lotteryNumbers">
      <h3>Please Select any 5 numbers</h3>
      <div className="billNumbers">{lotteryNumbersButtons}</div>
      <div
        class="btn-group ccr"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button
          className="btn btn-info"
          onClick={() => props.onCash()}
          disabled={!props.isDisabled}
        >
          Cash
        </button>
        <button className="btn btn-danger" onClick={() => props.onClear()}>
          Clear
        </button>
        <button
          className="btn btn-success"
          onClick={() => props.onRandom()}
          disabled={props.isDisabled}
        >
          Random
        </button>
      </div>
    </div>
  );
};

export default LotteryNumbers;
