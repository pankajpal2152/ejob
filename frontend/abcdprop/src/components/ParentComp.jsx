import { useState } from "react";
import ChildComp from "./ChildComp";

const ParentComp = () => {

    // State to store child data
    const [food, setFood] = useState(null);

    // Function passed to child
    const sayHello = (data) => {
        console.log("Child sent:", data);
        alert("Child Sent: " + data.food);

        setFood(data);
    };

    const user = {
        id: 1,
        name: "John Doe",
        address: {
            state: "wb",
            city: "kolkata",
            pinCode: 700001
        }
    };
    return (
        <>
            <h2>Parent Component</h2>

            {/* Display child data */}
            {food && (
                <div style={{ border: "1px solid black", padding: "10px" }}>
                    <p><b>Food:</b>{food.food}</p>
                    <p><b>Price:</b>₹{food.price}</p>
                </div>
            )}

            {/* Pass function + data */}
            <ChildComp parentFn={sayHello}
                title="Hello from Parent"
                userData={user}
            />
        </>
    );
}

export default ParentComp;
