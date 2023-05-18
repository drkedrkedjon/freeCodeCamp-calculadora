import { useState } from "react";

function Calculator() {
  // Segundo numero, operator, Primer numero states
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [firstOperand, setFirstOperand] = useState(null);

  const handleDigitClick = (digit) => {
    if (displayValue === "0" && digit === 0) {
      return; // No permitir múltiples ceros consecutivos
    }
    if (displayValue === "0" || operator !== null) {
      // Si segundo numero es 0 o hay operator en state, asignar el valor del segundo numero de digit sin operacion concatenar y borrar operador
      setDisplayValue(String(digit));
      setOperator(null);
    } else {
      // Al dar al numero, su valor en digit se suma a segundo numero
      setDisplayValue(displayValue + digit);
    }
  };

  const handleOperatorClick = (operator, type) => {
    // Si el primer numero es null, asignar el segundo como el primer (el de display)
    if (firstOperand === null) {
      setFirstOperand(parseFloat(displayValue));
    } else if (operator !== "=") {
      // Realizar el cálculo si ya hay un operador y no es "="
      const result = calculateResult();
      setDisplayValue(String(result));
      setFirstOperand(result);
    }

    setOperator(operator);
  };

  const handleEqualsClick = () => {
    // Si el primer num no es null y operandi no es null
    if (firstOperand !== null && operator !== null) {
      const result = calculateResult();
      setDisplayValue(String(result));
      setFirstOperand(null);
      setOperator(null);
    }
  };

  const handleClearClick = () => {
    setDisplayValue("0");
    setOperator(null);
    setFirstOperand(null);
  };

  const calculateResult = () => {
    const secondOperand = parseFloat(displayValue);

    switch (operator) {
      case "+":
        return firstOperand + secondOperand;
      case "-":
        return firstOperand - secondOperand;
      case "*":
        return firstOperand * secondOperand;
      case "/":
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  };

  return (
    <div className="calculator">
      <div id="display">{displayValue}</div>
      <div className="buttons">
        <div className="row">
          <button id="seven" onClick={() => handleDigitClick(7)}>
            7
          </button>
          <button id="eight" onClick={() => handleDigitClick(8)}>
            8
          </button>
          <button id="nine" onClick={() => handleDigitClick(9)}>
            9
          </button>
          <button id="divide" onClick={() => handleOperatorClick("/")}>
            /
          </button>
        </div>
        {/* Otras filas de botones */}
        <div className="row">
          <button id="zero" onClick={() => handleDigitClick(0)}>
            0
          </button>
          <button id="equals" onClick={handleEqualsClick}>
            =
          </button>
        </div>
      </div>
      <button id="clear" onClick={handleClearClick}>
        C
      </button>
    </div>
  );
}

export default Calculator;
