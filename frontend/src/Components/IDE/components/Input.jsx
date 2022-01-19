import React from "react";

export default function Input(props) {
  const getInpValue = (e) => {
    props.inputHandler(e.target.value);
    e.preventDefault();
  };

  return (
    <div className="input">
      <div className="heading">Input</div>
      <textarea
        onChange={getInpValue}
        type="text"
        rows="10"
        cols="10"
        placeholder="Enter Input"
        id="inputTextArea"
        defaultValue={props.input}
      ></textarea>
    </div>
  );
}
