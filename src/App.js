import "./App.css";
import Home from "./Pages/index";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  let myNewChange = "This is my Change";
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
