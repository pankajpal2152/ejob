const ChildComp = ({ title, userData, parentFn }) => {

    const foodItem = {
        food_id: 1,
        food: "Chicken Biryani",
        price: 200
    };

    return (
        <>
            <h2>Child Component</h2>

            <h3>{title}</h3>

            <p>Name:{userData?.name}</p>
            <p>State:{userData?.address?.state}</p>
            <p>City:{userData?.address?.city}</p>
            <p>PinCode:{userData?.address?.pinCode}</p>

            {/* Send data to parent */}
            <button onClick={() => parentFn(foodItem)}>Send to Parent</button>
        </>
    );
};

export default ChildComp;