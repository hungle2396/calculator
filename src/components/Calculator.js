import React, { useState } from "react";
import "../css/calculator.css";

const Calculator = () => {
  const [characters, setCharacters] = useState("");
  const [result, setResult] = useState("0");

  const operations = ["+", "-", "*", "/"];

  console.log("Beginning of Calculator function");
  console.log(`characters: ${characters}`);
  console.log(`result: ${result}`);

  const concatCharactersHandler = (e) => {
    // The character is one of the operation
    if (
      (operations.includes(e) && characters === "") ||
      (operations.includes(e) && operations.includes(characters.slice(-1)))
    ) {
      return;
    }

    // The character is a number
    setCharacters((prevCharacters) => {
      return prevCharacters + e;
    });

    console.log(characters);
    if (!operations.includes(e)) {
      setResult(() => {
        return eval(characters + e).toString();
      });
    }
  };

  const equalHandler = (e) => {
    const last_Character = characters.slice(-1);

    console.log("last Character is ", last_Character);

    if (operations.includes(last_Character)) {
      return;
    }

    if (!operations.includes(last_Character)) {
      setResult(eval(characters).toString());
      setCharacters(result.toString());
    }
  };

  const clearHandler = (e) => {
    setCharacters("");
    setResult("0");
  };

  return (
    <div className="calculator">
      <div className="calculator__box--result">
        <div className="calculator__string">{characters}</div>
        <div className="calculator__result">{result}</div>
      </div>

      <div className="calculator__box calculator__box--1">
        <button
          value="1"
          className="calculator__btn calculator__btn--1"
          onClick={(e) => concatCharactersHandler(e.target.value)}
        >
          1
        </button>
      </div>

      <div className="calculator__box calculator__box--2">
        <button
          value="2"
          className="calculator__btn calculator__btn--2"
          onClick={(e) => concatCharactersHandler(e.target.value)}
        >
          2
        </button>
      </div>

      <div className="calculator__box calculator__box--3">
        <button
          value="3"
          className="calculator__btn calculator__btn--3"
          onClick={(e) => concatCharactersHandler(e.target.value)}
        >
          3
        </button>
      </div>

      <div className="calculator__box calculator__box--4">
        <button
          value="4"
          className="calculator__btn calculator__btn--4"
          onClick={(e) => concatCharactersHandler(e.target.value)}
        >
          4
        </button>
      </div>

      <div className="calculator__box calculator__box--5">
        <button
          value="5"
          className="calculator__btn calculator__btn--5"
          onClick={(e) => concatCharactersHandler(e.target.value)}
        >
          5
        </button>
      </div>

      <div className="calculator__box calculator__box--6">
        <button
          value="6"
          className="calculator__btn calculator__btn--6"
          onClick={(e) => concatCharactersHandler(e.target.value)}
        >
          6
        </button>
      </div>

      <div className="calculator__box calculator__box--7">
        <button
          value="7"
          className="calculator__btn calculator__btn--7"
          onClick={(e) => concatCharactersHandler(e.target.value)}
        >
          7
        </button>
      </div>

      <div className="calculator__box calculator__box--8">
        <button
          value="8"
          className="calculator__btn calculator__btn--8"
          onClick={(e) => concatCharactersHandler(e.target.value)}
        >
          8
        </button>
      </div>

      <div className="calculator__box calculator__box--9">
        <button
          value="9"
          className="calculator__btn calculator__btn--9"
          onClick={(e) => concatCharactersHandler(e.target.value)}
        >
          9
        </button>
      </div>

      <div className="calculator__box calculator__box--0">
        <button
          value="0"
          className="calculator__btn calculator__btn--0"
          onClick={(e) => concatCharactersHandler(e.target.value)}
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
          onClick={() => equalHandler()}
        >
          =
        </button>
      </div>

      <div className="calculator__box calculator__box--plus">
        <button
          value="+"
          className="calculator__btn calculator__btn--plus"
          onClick={(e) => concatCharactersHandler(e.target.value)}
        >
          +
        </button>
      </div>

      <div className="calculator__box calculator__box--minus">
        <button
          value="-"
          className="calculator__btn calculator__btn--minus"
          onClick={(e) => concatCharactersHandler(e.target.value)}
        >
          -
        </button>
      </div>

      <div className="calculator__box calculator__box--mutiply">
        <button
          value="*"
          className="calculator__btn calculator__btn--multiply"
          onClick={(e) => concatCharactersHandler(e.target.value)}
        >
          *
        </button>
      </div>

      <div className="calculator__box calculator__box--divide">
        <button
          value="/"
          className="calculator__btn calculator__btn--divide"
          onClick={(e) => concatCharactersHandler(e.target.value)}
        >
          /
        </button>
      </div>
    </div>
  );
};

export default Calculator;
