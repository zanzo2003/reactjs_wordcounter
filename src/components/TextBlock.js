import React,{useState}from "react";

export default function TextBlock(props) {

  const styling = {
    height: "150px",
    width: "400px",
  }


  const [text, setText] = useState('');

  const handleUpdate = (element)=>{
    setText(element.target.value);
    console.log(text);
    wordCount();
  }
  
  const wordCount = (element)=>{
    const arr = text.split(' ');
    console.log(arr.filter(word => word !== '').length);
    document.getElementById('result').innerHTML = arr.filter(word => word !== '').length;

  }

  const upperCase = ()=>{
    var up = text.toUpperCase();
    setText(up);
  }
  const lowerCase = ()=>{
    var up = text.toLowerCase();
    setText(up);
  }


  return (
    <div className="form-floating">
      <textarea
        value={text}
        onChange={handleUpdate}
        className="form-control"
        placeholder="Leave a comment here"
        id="inputTextArea"
        htmlFor = "inputTextArea"
        style={styling}
      ></textarea>
      <label htmlFor="inputTextArea">{props.label}</label>
      <h3>The word count is <span id="result">0</span> .</h3>
      <button className="btn btn-primary px-3 mt-3" type="button" onClick={upperCase}>Upper Case</button>
      <button className="btn btn-secondary px-5 ms-4 me-4" disabled id="disBtn"></button>
      <button className="btn btn-primary px-3 mt-3" type="button" onClick={lowerCase}>Lower Case</button>
    </div>
  );
}
