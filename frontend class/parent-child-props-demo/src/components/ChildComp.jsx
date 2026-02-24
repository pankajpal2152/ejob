import React from "react";

const ChildComp = ({ title, userData, parentFn }) => {
    const foodItem = {
        food_id: 1,
        food: "Chicken Biriyani",
        price: 200,
    };

    return (
        <>
            <h2>ChildComp:</h2>
            <h3>{title}</h3>

            <p>Name: {userData?.name}</p>
            <p>State: {userData?.address?.state}</p>
            <p>City: {userData?.address?.city}</p>
            <p>PinCode: {userData?.address?.pinCode}</p>

            <button onClick={() => parentFn(foodItem)}>Send to Parent</button>
        </>
    );
};

export default ChildComp;