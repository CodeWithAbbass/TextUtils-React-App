import React, { useState } from "react";

export default function TextForm(props) {
  const handlerUpperCaseClick = () => {
    // console.log("UpperCase Clicked"  + text);

    // Here Below we Convert String to UpperCase.
    // We Get text value through textarea 'value' attribute,
    // and then convert string to UpperCase
    const convertText = text.toUpperCase();
    setText(convertText); // Here We SetText.
    props.showAlert("Converted To UpperCase", "success");

  };
  const handlerlowercaseClick = () => {
    const convertText = text.toLowerCase();
    setText(convertText); // Here We SetText.
    props.showAlert("Converted To LowerCase", "success");
  };


  const handlerCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied", "success");
  };
// *******************************************
//      Miss Yeh Aap K Liye Hai ;)
// *******************************************
  const handlerRemoveSpaces = () => {
    const Text = text.split(/[ ]+/);
    setText(Text.join(" "));
    props.showAlert("Removed Extra Spaces", "success");
  };


  const handlerClearClick = () => {
    const convertText = "";
    setText(convertText); // Here We SetText.
    props.showAlert("Text Box Cleared", "success");
  };
  const handleOnChange = (event) => {
    console.log("OnChange Clicked");
    // Here We Set The OnChange Value through Target Which is Provided by Event,
    // And Event is Provided by onChange.
    setText(event.target.value);
  };

  // Declare a New State Variable, Which We Will Call "Text"
  // 1st Variable is By Default Set Which is Write in useState.
  // 2nd Variable is Updated and Set Value Which we Get in handlerUpperCaseClick Function
  const [text, setText] = useState("Enter Text Here");
  return (
    <div className="container my-4" style={
      {
        color: props.darkMode === "dark" ? "white" : "black",
      }
    }>
      <h1 className="">{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          This is Textarea Below
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="10"
          style={
            {
              backgroundColor: props.darkMode === "dark" ? "transparent" : "white",
              color: props.darkMode === "dark" ? "white" : "black",
            }
          }
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlerUpperCaseClick}>
        Convert To UPPERCASE
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlerlowercaseClick}>
        Convert To lowercase
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlerCopy}>
        Copy Text
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlerRemoveSpaces}>
        Remove Extra Spaces
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlerClearClick}>
        Clear
      </button>
      <div className="container my-4">
        <h3>Your Text Summary</h3>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters Including
          Spaces.
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read.</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing To Preview Here"}</p>
      </div>
    </div >
  );
}
