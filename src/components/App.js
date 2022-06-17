import React, { useState } from "react";
import Header from "./Header";
import LotteryNumbers from "./LotteryNumbers";
import SelectedNumbers from "./SelectedNumbers";
import MoneyButtons from "./MoneyButtons";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import Modal from "./Modal";
const App = () => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [ableToSelectNumbers, setAbleToSelectNumbers] = useState(true);
  const [total, setTotal] = useState(0);

  const resetNumbers = () => {
    setAbleToSelectNumbers(true);
    setSelectedNumbers([]);
    setTotal(0);
  };
  const addNumber = (num) => {
    if (selectedNumbers.length < 4) {
      setSelectedNumbers([...selectedNumbers, num]);
    } else if (selectedNumbers.length === 4) {
      setSelectedNumbers([...selectedNumbers, num]);
      setAbleToSelectNumbers(false);
    }
  };
  const removeNumber = (num) => {
    const filteredNumbers = selectedNumbers.filter((number) => number !== num);
    setSelectedNumbers(filteredNumbers);
    setAbleToSelectNumbers(true);
  };

  const addToTotal = (num) => setTotal(total + num);

  const randomNumbers = () => {
    let randomNumbers = [...selectedNumbers];
    while (randomNumbers.length <= 4) {
      const randomNumber = Math.floor(Math.random() * 20) + 1;
      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
      }
    }
    setSelectedNumbers(randomNumbers);
    setAbleToSelectNumbers(false);
  };

  const clickOnCashButton = () => {
    if (total === 0) {
      alert(`You cannot bet 0$`);
    } else {
      alert(
        `The numbers: ${selectedNumbers.toString()} have been selected and ${total} total amount of money is played`
      );
      setAbleToSelectNumbers(true);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row align-items-start">
          <div className="col">
            <MoneyButtons
              onAddMoney={addToTotal}
              isDisabled={ableToSelectNumbers}
            />
          </div>
          <div className="col">
            <LotteryNumbers
              className="col"
              onAddNumber={addNumber}
              numbers={selectedNumbers}
              onClear={resetNumbers}
              isDisabled={!ableToSelectNumbers}
              onRandom={randomNumbers}
              onCash={clickOnCashButton}
              // onToggleAddForm={toggleAddForm}
            />
          </div>
          <div className="col">
            <SelectedNumbers
              className="col"
              total={total}
              numbers={selectedNumbers}
              onRemoveNumber={removeNumber}
              // addFormState={addFormState}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
