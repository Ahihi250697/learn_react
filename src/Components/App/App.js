// import logo from './logo.svg';
import "./App.css";
import Cpn_click from "../Cpn_click";
import ParentComp from "../ParentComp";

function App() {
    return (
        <div>
            <h1>This is h1</h1>
            <Cpn_click></Cpn_click>
            <ParentComp>
                <p>this is P</p>
            </ParentComp>
        </div>
    );
}

export default App;
