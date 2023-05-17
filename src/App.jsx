import { useState } from "react";
import Button from "./Button";

function App() {
  const [displayNum, setDisplayNum] = useState("0");
  const [operandi, setOperandi] = useState(null);
  const [firstNum, setFirstNum] = useState(null);
  const [newDisplay, setNewdisplay] = useState(false);

  function handleNumero(numero) {
    // Primero debe averiguar si display numeber es 0 y si mandamos 0 en tal caso no hacer nada
    // Si empezamos con 0 el numero que ponemos (4) debe ser puesto en display en lugar de 0 a no ser que se trata de decimal .
    // Si es decimal debe concatenarse
    // Si hay un decimal no debe poner el otro
    // Si es cualquer otro numero debe concatenarse
    // Si hay numero guardado sustituir el de display igual como si esta 0

    if (displayNum === "0" && numero === "0") {
      console.log("Zero consecutivo");
      return;
    }
    const isThereDecimal = displayNum.includes(".");

    if (displayNum === "0" && numero === "." && !isThereDecimal) {
      console.log("Punto concatenado");
      setDisplayNum(displayNum + numero);
    } else if (displayNum === "0" || newDisplay) {
      console.log("Numero 0 sustituido");
      setDisplayNum(numero);
      // setNewdisplay(false);
    } else if (numero === ".") {
      if (!isThereDecimal) {
        console.log("Added . en un numero normal");
        setDisplayNum(displayNum + numero);
      }
    } else {
      console.log("numero concatenado");
      setDisplayNum(displayNum + numero);
    }

    // // No permitir múltiples ceros consecutivos al inicio
    // if (displayNum === "0" && numero === "0") {
    //   console.log("Numero consecutivo");
    //   return;
    // }
    // if (displayNum === "0" || control === false) {
    //   console.log("display 0 o hay operandi");
    //   setDisplayNum(numero);
    //   setControl(true);
    //   // Si el displayNum es 0 o hay operator en state, asignar el valor del numero sin concatenar y borrar operador
    // } else {
    //   console.log("De mas numeros");

    //   setDisplayNum(displayNum + numero);
    // }
  }
  function calcularResultado(operator) {
    // Convertir display numero string en numero numero y guardarlo
    const secondNum = parseFloat(displayNum);

    switch (operator) {
      case "+":
        return firstNum + secondNum;
      case "-":
        return firstNum - secondNum;
      case "x":
        return firstNum * secondNum;
      case "/":
        return firstNum / secondNum;
      default:
        return secondNum;
    }
  }

  function handleOperandi(operator) {
    // Si el primer numero es null, asignar el de display como el primer numero
    if (firstNum === null) {
      console.log("cargar primer numero");
      setFirstNum(parseFloat(displayNum));
      setOperandi(operator);
      setNewdisplay(true);
    } else {
      console.log("cualquier operandi");
      // Realizar el cálculo si ya hay un operador y no es "="
      const result = calcularResultado(operator);
      // Asignar ambos, display y first numero el resultado de calculo
      setDisplayNum(result);
      setFirstNum(result);
      setNewdisplay(true);
    }
    setOperandi(operator);
  }
  console.log(operandi);
  function handleAC() {
    // Resetear los tres estado
    setDisplayNum("0");
    setFirstNum(null);
    setOperandi(null);
  }
  function handleEqual() {
    // Si el primer num no es null y operandi no es null
    console.log(operandi);
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
