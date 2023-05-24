import { jsx as _jsx } from "react/jsx-runtime";
import Form from './Form';
import { useState } from 'react';
import MessageDisplay from './MessageDisplay';
export default function DataHandler() {
    //variables
    const [getUsername, setUserName] = useState("");
    function handleSubmit(event) {
        event.preventDefault();
        setUserName("");
        return (_jsx("div", { children: _jsx(MessageDisplay, {}) }));
    }
    return (_jsx("div", { children: _jsx(Form, { submit: handleSubmit }) }));
}
