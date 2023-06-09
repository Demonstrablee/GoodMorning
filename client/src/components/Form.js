import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../App.css';
import { useRef } from 'react';
export default function Form(props) {
    const nameRef = useRef(null); // refrence for the name 
    function onFormSubmit(event) {
        event.preventDefault();
        const storedUserName = nameRef.current; // set the stored username to this ref (should be updated by onFormChange)
        //console.log(storedUserName)
        props.submit(storedUserName);
    }
    function onFormChange(event) {
        //console.log(event.target.id)
        //console.log(event.target.value)
        nameRef.current = event.target.value; // Set the value of the ref to the new value
        //console.log("the ref is currently: "+ nameRef.current) 
    }
    return (_jsx("div", { children: _jsxs("form", Object.assign({ id: "form", onSubmit: onFormSubmit }, { children: [_jsx("h1", Object.assign({ id: 'title' }, { children: "Good Morning" })), _jsx("label", Object.assign({ id: 'font-label' }, { children: "Whats your name? " })), _jsx("input", { type: "text", id: "userName", onChange: onFormChange, ref: nameRef })] })) }));
}
