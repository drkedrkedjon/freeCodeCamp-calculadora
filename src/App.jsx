import { useState } from "react";
import Button from "./Button";

function App() {
  const [display, setDisplay] = useState("0");
  const [resultado, setResultado] = useState(0);

  function handleClick(value, type) {
    if (type === "AC") {
      setDisplay("0");
      setResultado(0);
    }
    if (type === "number") {
      setDisplay((oldValue) => {
        let firstZero = oldValue === "0" ? "" : oldValue;
        return (firstZero += value);
      });
      setResultado((oldValue) => {
        let firstZero = oldValue === 0 ? "" : oldValue;
        return (firstZero += Number(value));
      });
    }
    if (type === "operandi") {
      console.log(value);
    }
  }

  console.log(resultado);
  return (
    <main className="container">
      <div id="display">{display}</div>
      <Button
        type="AC"
        handleClick={handleClick}
        value="AC"
        id="clear"
        color="red"
      />
      <Button
        type="operandi"
        handleClick={handleClick}
        value="/"
        id="divide"
        color="grey"
      />
      <Button
        type="operandi"
        handleClick={handleClick}
        value="x"
        id="multiply"
        color="grey"
      />
      <Button
        type="number"
        handleClick={handleClick}
        value="7"
        id="seven"
        color="dark-grey"
      />
      <Button
        type="number"
        handleClick={handleClick}
        value="8"
        id="eight"
        color="dark-grey"
      />
      <Button
        type="number"
        handleClick={handleClick}
        value="9"
        id="nine"
        color="dark-grey"
      />
      <Button
        type="operandi"
        handleClick={handleClick}
        value="-"
        id="subtract"
        color="grey"
      />
      <Button
        type="number"
        handleClick={handleClick}
        value="4"
        id="four"
        color="dark-grey"
      />
      <Button
        type="number"
        handleClick={handleClick}
        value="5"
        id="five"
        color="dark-grey"
      />
      <Button
        type="number"
        handleClick={handleClick}
        value="6"
        id="six"
        color="dark-grey"
      />
      <Button
        type="operandi"
        handleClick={handleClick}
        value="+"
        id="add"
        color="grey"
      />
      <Button
        type="number"
        handleClick={handleClick}
        value="1"
        id="one"
        color="dark-grey"
      />
      <Button
        type="number"
        handleClick={handleClick}
        value="2"
        id="two"
        color="dark-grey"
      />
      <Button
        type="number"
        handleClick={handleClick}
        value="3"
        id="three"
        color="dark-grey"
      />
      <Button
        type="operandi"
        handleClick={handleClick}
        value="="
        id="equals"
        color="blue"
      />
      <Button
        type="number"
        handleClick={handleClick}
        value="0"
        id="zero"
        color="dark-grey"
      />
      <Button
        type="operandi"
        handleClick={handleClick}
        value="."
        id="decimal"
        color="dark-grey"
      />
    </main>
  );
}

export default App;
