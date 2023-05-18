import { useState } from "react";
import Button from "./Button";

function App() {
  const [displayNum, setDisplayNum] = useState("0");
  const [operandi, setOperandi] = useState(null);
  const [firstNum, setFirstNum] = useState(null);
  const [newDisplay, setNewdisplay] = useState(false);
  const [whatType, setWhatType] = useState("number");
  const [lastOperandi, setLastOperandi] = useState(null);
  const [panic, setPanic] = useState(false);

  function handleNumero(numero, type) {
    // Primero debe averiguar si display numeber es 0 y si mandamos 0 en tal caso no hacer nada
    // Si empezamos con 0 el numero que ponemos (4) debe ser puesto en display en lugar de 0 a no ser que se trata de decimal .
    // Si es decimal debe concatenarse
    // Si hay un decimal no debe poner el otro
    // Si es cualquer otro numero debe concatenarse
    // Si hay numero guardado sustituir el de display igual como si esta 0

    // f 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign). For example, if 5 + * 7 = is entered, the result should be 35 (i.e. 5 * 7); if 5 * - 5 = is entered, the result should be -25 (i.e. 5 * (-5)).
    // "5 * - + 5" = should produce an output of "10"
    // 3 + 5 * 6 - 2 / 4 should produce 32.5 or 11.5

    if (panic && operandi === "-") {
      console.log("PANIC actual operandi es -");
      setDisplayNum(operandi + numero);
      setOperandi(lastOperandi);
      setPanic(false);
      return;
    }

    if (displayNum === "0" && numero === "0") {
      console.log("Zero consecutivo");
      return;
    }
    const isThereDecimal = displayNum.includes(".");

    if (displayNum === "0" && numero === "." && !isThereDecimal) {
      console.log("Punto concatenado");
      setDisplayNum(displayNum + numero);
    } else if (displayNum === "0" || !newDisplay) {
      console.log("Numero 0 sustituido");
      setDisplayNum(numero);
      setNewdisplay(true);
    } else if (numero === ".") {
      if (!isThereDecimal) {
        console.log("Added . en un numero normal");
        setDisplayNum(displayNum + numero);
      }
    } else {
      console.log("numero concatenado");
      setDisplayNum(displayNum + numero);
    }
    setWhatType(type);
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
  function handleOperandi(operator, type) {
    // Function handleOperandi
    //     Si numero guardado es null
    // Añadir display número a número guardado
    // Guardar operandi
    // Resetear handleNúmeros para que empieza por un nuevo número. Hace falta un state para eso?
    //      Si número guardado existe
    // Usar operandi para hacer cálculo entre número guardado y el número en display.
    // Número retornado del calculo guardar como número guardado
    // Asignar este número retornado a display número
    // Guardar operandi
    // Resetear newDisplay para que empieza por un nuevo número. Hace falta un state para eso?

    // f 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign). For example, if 5 + * 7 = is entered, the result should be 35 (i.e. 5 * 7); if 5 * - 5 = is entered, the result should be -25 (i.e. 5 * (-5)).
    // "5 * - + 5" = should produce an output of "10"

    if (whatType === "number") {
      if (firstNum === null) {
        console.log("Promer numero guardado");
        setFirstNum(parseFloat(displayNum));
        setOperandi(operator);
        setNewdisplay(false);
      } else {
        const resultado = calcularResultado(operandi);
        console.log("operacion calculadora terminada");
        setDisplayNum(String(resultado));
        setFirstNum(resultado);
        setOperandi(operator);
        setNewdisplay(false);
      }
    }

    // Si ultima tecla era operandi, cambiar operandi nada mas
    // "5 * - + 5" = should produce an output of "10"

    if (whatType === "operandi") {
      console.log("cambio de operandi");
      setLastOperandi(operandi);
      setOperandi(operator);
      setPanic(true);
    }
    setWhatType(type);
  }
  function handleAC() {
    // Resetear los tres estado
    setDisplayNum("0");
    setFirstNum(null);
    setOperandi(null);
  }
  function handleEqual() {
    //     Function =
    // Hacer calculus
    // Presentar el resultado en display
    // setOperator a =
    // Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation
    // console.log("Operacion = hecha");

    const resultado = calcularResultado(operandi);
    setDisplayNum(String(resultado));
    setFirstNum(null);
    setOperandi("=");
    setNewdisplay(false);
    setWhatType("number");
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
