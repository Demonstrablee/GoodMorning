import { jsx as _jsx } from "react/jsx-runtime";
export default function MessageDisplay(props) {
    return (_jsx("div", Object.assign({ id: 'phoneOutline' }, { children: _jsx("h1", Object.assign({ id: "userName-phone" }, { children: props.user })) })));
}
