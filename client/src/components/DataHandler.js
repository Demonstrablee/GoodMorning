import { jsx as _jsx } from "react/jsx-runtime";
import Form from './Form';
import { useState } from 'react';
export default function DataHandler() {
    //variables
    const [getUsername, setUserName] = useState("");
    function handleSubmit() {
        setUserName("");
    }
    return (_jsx("div", { children: _jsx(Form, { submit: handleSubmit }) }));
}
