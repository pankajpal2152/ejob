import ParentLeft from "./components/ParentLeft";
import ParentMiddle from "./components/ParentMiddle";
import ParentRight from "./components/ParentRight";

function App() {
  const message = "Hello World";

  return (
    <div style={{ padding: "20px" }}>
      <h1>App Component</h1>

      <ParentLeft msg={message} />
      <ParentMiddle msg={message} />
      <ParentRight msg={message} />
    </div>
  );
}

export default App;