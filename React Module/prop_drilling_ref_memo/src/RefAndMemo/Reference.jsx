import React, { useRef, useState } from "react";

const Reference = () => {
  const [name, setName] = useState("");
  const inputRef = useRef("");

  const clear = () => {
    console.log(inputRef.current.value);
    setName("");
    inputRef.current.value = "through ref";
    inputRef.current.focus();
  };

  const changeColor = () => {
    inputRef.current.style.color = "Red";
    inputRef.current.style.backgroundColor = "Tomato";
  };
  return (
    <div>
      <h1>Use Ref Example</h1>
      <input
        ref={inputRef}
        type="text"
        value={name || inputRef.current.value}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <button onClick={clear}>clear</button>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default Reference;
