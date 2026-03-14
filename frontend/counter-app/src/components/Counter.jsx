import React, { useEffect, useState } from "react";

const Counter = ({ darkMode }) => {

    const [count, setCount] = useState(() => {
        const saved = localStorage.getItem("counter");
        return saved ? parseInt(saved) : 0;
    });

    const increase = () => setCount(prev => prev + 1);
    const decrease = () => setCount(prev => prev - 1);
    const reset = () => setCount(0);

    // Save to LocalStorage
    useEffect(() => {
        localStorage.setItem("counter", count);
    }, [count]);

    // Keyboard Controls
    useEffect(() => {

        const handleKey = (e) => {

            if (e.key === "+") increase();
            if (e.key === "-") decrease();
            if (e.key === "r") reset();

        };

        window.addEventListener("keydown", handleKey);

        return () => {
            window.removeEventListener("keydown", handleKey);
        };

    }, []);

    return (
        <div className={darkMode ? "counter dark" : "counter"}>

            <h2>Advanced Counter</h2>

            <h1>{count}</h1>

            <div className="buttons">

                <button className="btn inc" onClick={increase}>
                    +
                </button>

                <button className="btn dec" onClick={decrease}>
                    -
                </button>

                <button className="btn reset" onClick={reset}>
                    Reset
                </button>

            </div>

            <p>Keyboard: "+" increase | "-" decrease | "r" reset</p>

        </div>
    );
};

export default Counter;