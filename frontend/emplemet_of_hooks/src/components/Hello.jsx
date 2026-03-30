import { useState } from "react";
const Hello = () => {

    // State Declaration
    const [count, setCount] = useState(100);

    // Increase
    const doIncrease = () => {
        setCount(prev => prev + 1);
    }

}