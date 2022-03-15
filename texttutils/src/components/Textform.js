import React, { useState } from "react";

export default function Textform(props) {
    const handleupclick = ()=>{
        // console.log("uppercase was clicked " + text);
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleloclick = ()=>{
        // console.log("uppercase was clicked " + text);
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    
    
    const [text,setText]  = useState("");

    const handleonchange = (event)=>{
       // console.log("on change"); 
        setText(event.target.value);
    }

    return(
        <>
        <div>
            <h3>{props.heading}</h3>
            <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleonchange} id="mybox" rows="8"></textarea>
            <button className="btn btn-primary mx-2" onClick={handleupclick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleloclick}>Convert to lowercase</button>
            </div>
            <div className="container my-5">
                <h2>Your text summary</h2>
                <p> {text.split(" ").length} words and {text.length} characters. </p>
                <p>{0.008 * text.split(" ").length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
        </>
  );
}
