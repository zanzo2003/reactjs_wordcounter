import "./App.css";
import "./index.js";
import Navbar from "./components/Navbar";
import TextBlock from "./components/TextBlock";

function App() {

  return (
    <>
      <Navbar title="TextUtils"/>
      <div className="container">
        <TextBlock label="Enter your text"/>
        </div>
  </>
  );
}

export default App;
