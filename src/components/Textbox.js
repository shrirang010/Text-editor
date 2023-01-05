import React,{ useState } from "react";
import './Textbox.css'

export default function Textbox(props) {
    const [heading,setHeading] =useState("Text Editor")
    const [text,setText] = useState("Enter text here")

    function changeheading(){
        console.log("Heading changed")
        let newheading =prompt("Enter the new heading")
        setHeading(newheading)
    }
    const afterclick1 = ()=>{
        console.log("Uppercase button clicked")
        let newtext =text.toUpperCase()
        setText(newtext)
    }
    const afterclick2= ()=>{
        console.log("Lowercase button clicked")
        let newtext =text.toLowerCase()
        setText(newtext)
    }
    const textChange = (event)=>{
        console.log("Value has been changed to:");
        setText (event.target.value)
    }
    function cleartext(){
        console.log("clearing text")
        setText("")
    }
    function copytext(){
        let element=document.getElementById('textbx')
        let cliptxt=element.innerHTML
        console.log("Text has been copied to clipboard")
        alert("copied to clipboard")
        navigator.clipboard.writeText(cliptxt)
    }
    return (
        <div className="ms-5 me-5">
            <h3 className={`mt-4 text-${props.headingcolor} fs-1 `} style={{textAlign:"center"}}>{heading}</h3>
            <textarea id="textbx"className="form-control" value={text} onChange = {textChange} style={{backgroundColor:"grey",color:`{props.mode}`}} rows="10"cols="6"></textarea>
            <div className="mt-4 mb-4 " id="btngroup">
                <button onClick={afterclick1} className="btn btn-primary " >Convert to UpperCase</button>
                <button onClick={afterclick2} className="btn btn-primary ms-2" >Convert to Lowecase</button>
                <button onClick={copytext} className="ms-2 bg-success btn btn-secondary "> Copy to clipboard</button>
                <button onClick={cleartext} className="btn btn-primary ms-2 ">Clear text </button>
                <button onClick={changeheading} className="btn btn-primary ms-2">Change heading</button>
            </div>
        </div> 
  )
}
