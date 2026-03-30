import ParentComp from "./components/ParentComp";
function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Data from Child to Parent</h1>
      <ParentComp />
    </>
  );
}

export default App;