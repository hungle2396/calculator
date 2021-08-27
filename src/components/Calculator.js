import React, { useState, useEffect } from "react";
import "../css/calculator.css";

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [switchNumber, setSwitchNumber] = useState(false);
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState("");

  const concatNumberHandler = (e) => {
    console.log(e);

    if (!switchNumber) {
      setFirstNumber(firstNumber + e);
      setResult(firstNumber);
    } else {
      setSecondNumber(secondNumber + e);
      setResult(secondNumber);
    }
  };

  const operatorHandler = (e) => {
    setOperator(e);

    setSwitchNumber(true);
  };

  const equalHandler = (e) => {
    if (operator === "+") {
      setResult(Number(firstNumber) + Number(secondNumber));
    }

    if (operator === "-") {
      setResult(Number(firstNumber) - Number(secondNumber));
    }

    if (operator === "*") {
      setResult(Number(firstNumber) * Number(secondNumber));
    }

    if (operator === "/") {
      setResult(Number(firstNumber) / Number(secondNumber));
    }
  };

  const clearHandler = (e) => {
    setFirstNumber("");
    setSecondNumber("");
    setSwitchNumber(false);
    setOperator(null);
    setResult("");
  };

  // useEffect(() => {
  //   if (firstNumber) {
  //     setResult(firstNumber);
  //   }

  //   if (secondNumber) {
  //     setResult(secondNumber);
  //   }
  // }, [firstNumber, secondNumber]);

  return (
    <div className="calculator">
      <div className="calculator__box--result">
        <div className="calculator__result">{result}</div>
      </div>

      <div className="calculator__box calculator__box--1">
        <button
          value="1"
          className="calculator__btn calculator__btn--1"
          onClick={(e) => concatNumberHandler(e.target.value)}
        >
          1
        </button>
      </div>

      <div className="calculator__box calculator__box--2">
        <button
          value="2"
          className="calculator__btn calculator__btn--2"
          onClick={(e) => concatNumberHandler(e.target.value)}
        >
          2
        </button>
      </div>

      <div className="calculator__box calculator__box--3">
        <button
          value="3"
          className="calculator__btn calculator__btn--3"
          onClick={(e) => concatNumberHandler(e.target.value)}
        >
          3
        </button>
      </div>

      <div className="calculator__box calculator__box--4">
        <button
          value="4"
          className="calculator__btn calculator__btn--4"
          onClick={(e) => concatNumberHandler(e.target.value)}
        >
          4
        </button>
      </div>

      <div className="calculator__box calculator__box--5">
        <button
          value="5"
          className="calculator__btn calculator__btn--5"
          onClick={(e) => concatNumberHandler(e.target.value)}
        >
          5
        </button>
      </div>

      <div className="calculator__box calculator__box--6">
        <button
          value="6"
          className="calculator__btn calculator__btn--6"
          onClick={(e) => concatNumberHandler(e.target.value)}
        >
          6
        </button>
      </div>

      <div className="calculator__box calculator__box--7">
        <button
          value="7"
          className="calculator__btn calculator__btn--7"
          onClick={(e) => concatNumberHandler(e.target.value)}
        >
          7
        </button>
      </div>

      <div className="calculator__box calculator__box--8">
        <button
          value="8"
          className="calculator__btn calculator__btn--8"
          onClick={(e) => concatNumberHandler(e.target.value)}
        >
          8
        </button>
      </div>

      <div className="calculator__box calculator__box--9">
        <button
          value="9"
          className="calculator__btn calculator__btn--9"
          onClick={(e) => concatNumberHandler(e.target.value)}
        >
          9
        </button>
      </div>

      <div className="calculator__box calculator__box--0">
        <button
          value="0"
          className="calculator__btn calculator__btn--0"
          onClick={(e) => concatNumberHandler(e.target.value)}
        >
          0
        </button>
      </div>

      <div className="calculator__box calculator__box--C">
        <button
          value="C"
          className="calculator__btn calculator__btn--C"
          onClick={(e) => clearHandler(e.target.value)}
        >
          C
        </button>
      </div>

      <div className="calculator__box calculator__box--equal">
        <button
          value="="
          className="calculator__btn calculator__btn--equal"
          onClick={(e) => equalHandler(e.target.value)}
        >
          =
        </button>
      </div>

      <div className="calculator__box calculator__box--plus">
        <button
          value="+"
          className="calculator__btn calculator__btn--plus"
          onClick={(e) => operatorHandler(e.target.value)}
        >
          +
        </button>
      </div>

      <div className="calculator__box calculator__box--minus">
        <button
          value="-"
          className="calculator__btn calculator__btn--minus"
          onClick={(e) => operatorHandler(e.target.value)}
        >
          -
        </button>
      </div>

      <div className="calculator__box calculator__box--mutiply">
        <button
          value="*"
          className="calculator__btn calculator__btn--multiply"
          onClick={(e) => operatorHandler(e.target.value)}
        >
          *
        </button>
      </div>

      <div className="calculator__box calculator__box--divide">
        <button
          value="/"
          className="calculator__btn calculator__btn--divide"
          onClick={(e) => operatorHandler(e.target.value)}
        >
          /
        </button>
      </div>
    </div>
  );
};

export default Calculator;
