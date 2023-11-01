import "./App.css";
import "./index.js";

function App() {
  const textAreaStyle = {
    height: "12rem",
    width: "30rem"
  };
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid mynav">
          <span className="navbar-brand mb-0 h1">TextUtils</span>
        </div>
      </nav>
      <div className="form-floating textArea">
        <textarea
          className="form-control"
          placeholder="Enter the text"
          id="TextArea"
          style={textAreaStyle}
        ></textarea>
      </div>
    </>
  );
}

export default App;
