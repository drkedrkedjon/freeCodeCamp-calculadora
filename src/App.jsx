import { useState } from "react";
import Button from "./Button";

function App() {
  const [displayNum, setDisplayNum] = useState("0");
  const [operandi, setOperandi] = useState(null);
  const [firstNum, setFirstNum] = useState(null);

  function handleNumero(numero) {
    // No permitir múltiples ceros consecutivos al inicio
    if (displayNum === "0" && numero === "0") {
      return;
    }
    if (displayNum === "0" || operandi !== null) {
      setDisplayNum(numero);
      setOperandi(null);
      // Si el displayNum es 0 o hay operator en state, asignar el valor del numero sin concatenar y borrar operador
    } else {
      setDisplayNum(displayNum + numero);
    }
  }
  function handleOperandi(operator) {
    // Si el primer numero es null, asignar el de display como el primer numero
    if (firstNum === null) {
      setFirstNum(parseFloat(displayNum));
    } else if (operandi !== "=") {
      // Realizar el cálculo si ya hay un operador y no es "="
      const result = calcularResultado(operator);
      // Asignar ambos, display y first numero el resultado de calculo
      setDisplayNum(result);
      setFirstNum(result);
    }
    setOperandi(operator);
  }
  console.log(operandi);
  function calcularResultado() {
    // Convertir display numero string en numero numero y guardarlo
    const secondNum = parseFloat(displayNum);

    switch (operandi) {
      case "+":
        return firstNum + secondNum;
      case "-":
        return firstNum - secondNum;
      case "*":
        return firstNum * secondNum;
      case "/":
        return firstNum / secondNum;
      default:
        return secondNum;
    }
  }

  function handleAC() {
    // Resetear los tres estado
    setDisplayNum("0");
    setFirstNum(null);
    setOperandi(null);
  }
  function handleEqual(operator) {
    // Si el primer num no es null y operandi no es null
    console.log("sasa");
    console.log(firstNum);
    console.log(operator);
    if (firstNum !== null && operandi !== null) {
      const result = calcularResultado();
      setDisplayNum(String(result));
      setFirstNum(null);
      setOperandi(null);
    }
  }

  return (
    <main className="container">
      <div id="display">{displayNum}</div>
      <Button
        type="AC"
        handleClick={handleAC}
        value="AC"
        id="clear"
        color="red"
      />
      <Button
        type="operandi"
        handleClick={handleOperandi}
        value="/"
        id="divide"
        color="grey"
      />
      <Button
        type="operandi"
        handleClick={handleOperandi}
        value="x"
        id="multiply"
        color="grey"
      />
      <Button
        type="number"
        handleClick={handleNumero}
        value="7"
        id="seven"
        color="dark-grey"
      />
      <Button
        type="number"
        handleClick={handleNumero}
        value="8"
        id="eight"
        color="dark-grey"
      />
      <Button
        type="number"
        handleClick={handleNumero}
        value="9"
        id="nine"
        color="dark-grey"
      />
      <Button
        type="operandi"
        handleClick={handleOperandi}
        value="-"
        id="subtract"
        color="grey"
      />
      <Button
        type="number"
        handleClick={handleNumero}
        value="4"
        id="four"
        color="dark-grey"
      />
      <Button
        type="number"
        handleClick={handleNumero}
        value="5"
        id="five"
        color="dark-grey"
      />
      <Button
        type="number"
        handleClick={handleNumero}
        value="6"
        id="six"
        color="dark-grey"
      />
      <Button
        type="operandi"
        handleClick={handleOperandi}
        value="+"
        id="add"
        color="grey"
      />
      <Button
        type="number"
        handleClick={handleNumero}
        value="1"
        id="one"
        color="dark-grey"
      />
      <Button
        type="number"
        handleClick={handleNumero}
        value="2"
        id="two"
        color="dark-grey"
      />
      <Button
        type="number"
        handleClick={handleNumero}
        value="3"
        id="three"
        color="dark-grey"
      />
      <Button
        type="operandi"
        handleClick={handleEqual}
        value="="
        id="equals"
        color="blue"
      />
      <Button
        type="number"
        handleClick={handleNumero}
        value="0"
        id="zero"
        color="dark-grey"
      />
      <Button
        type="operandi"
        handleClick={handleNumero}
        value="."
        id="decimal"
        color="dark-grey"
      />
    </main>
  );
}

export default App;
