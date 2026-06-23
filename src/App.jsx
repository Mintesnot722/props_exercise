import "./App.css";
import data from "./data.js";
import Prop_ex from "../components/props_ex.jsx";

function App() {
  const card = data.map((dat) => {
    return <Prop_ex {...dat} />;
  });
  return <main className="mainPart">{card}</main>;
}

export default App;
