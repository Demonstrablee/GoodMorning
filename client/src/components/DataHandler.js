import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Form from './Form';
import { useState, useEffect } from 'react';
import MessageDisplay from './MessageDisplay';
export default function DataHandler() {
    //variables
    const [userName, setUserName] = useState("");
    function handleSubmit(inputUserName) {
        //console.log(inputUserName) 
        setUserName(inputUserName);
    }
    if (userName) // if there is something in username
        console.log("username is : " + userName);
    useEffect(() => {
        if (userName) // if theres something in username prevents run on page start
            console.log("use effect is in action");
    }, [userName]);
    return (_jsxs("div", { children: [!userName ? _jsx(Form, { submit: handleSubmit }) : null, userName ? _jsx(MessageDisplay, { user: userName }) : null] }));
}
