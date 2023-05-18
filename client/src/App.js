import { jsx as _jsx } from "react/jsx-runtime";
import './App.css';
import DataHandler from './components/DataHandler';
function App() {
    return (_jsx("div", Object.assign({ className: "App" }, { children: _jsx("header", Object.assign({ className: "App-header" }, { children: _jsx(DataHandler, {}) })) })));
}
export default App;
