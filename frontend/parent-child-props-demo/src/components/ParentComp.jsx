import React, { useState } from "react";
import ChildComp from "./ChildComp";

const ParentComp = () => {
    const [foodData, setFoodData] = useState(null);

    function sayHello(data) {
        alert("Child Sent: " + JSON.stringify(data));
        setFoodData(data);
    }

    const user = {
        id: 1,
        name: "Pankaj",
        address: {
            state: "WB",
            city: "Kolkata",
            pinCode: 712235,
        },
    };

    return (
        <>
            <h2>ParentComp:</h2>

            {foodData && (
                <div style={{ border: "1px solid black", padding: "10px", marginBottom: "10px" }}>
                    <p>Food: {foodData.food}</p>
                    <p>Price: {foodData.price}</p>
                </div>
            )}

            <ChildComp parentFn={sayHello} title="Hello" userData={user} />
        </>
    );
};

export default ParentComp;