import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  const message = "Hello World";

  return (
    <div style={{ padding: "20px" }}>
      <h1>Parent (App)</h1>

      <Navbar msg={message} />
      <Home msg={message} />
      <About msg={message} />
    </div>
  );
}

export default App;