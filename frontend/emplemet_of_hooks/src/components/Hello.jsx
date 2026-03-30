import { useState } from "react";

const Hello = () => {

    // State Declaration
    const [count, setCount] = useState(100);

    // Increase
    const doIncrease = () => {
        setCount(prev => prev + 1);
    };

    // Decrease
    const doDecrease = () => {
        setCount(prev => (prev > 0 ? prev - 1 : 0));
    };

    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <h2>Functional Component State(useState Hook)</h2>
            <h3>Count: {count}</h3>
            <button onClick={doIncrease} style={{ margin: "10px", padding: "10px" }}>+ Increment </button>

            <button onClick={doDecrease} style={{ margin: "10px", padding: "10px" }}>- Decrement </button>
        </div>
    );

};

export default Hello;