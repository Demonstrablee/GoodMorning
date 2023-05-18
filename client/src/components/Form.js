import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../App.css';
export default function Form(props) {
    return (_jsx("div", Object.assign({ id: "form" }, { children: _jsxs("form", { children: [_jsx("h1", Object.assign({ id: 'title' }, { children: "Good Morning" })), _jsx("label", Object.assign({ id: 'font-label' }, { children: "Whats your name? " })), _jsx("input", { type: "text", id: "userName" })] }) })));
}
