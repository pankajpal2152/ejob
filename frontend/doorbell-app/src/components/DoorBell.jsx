import React from "react";

const DoorBell = ({ enterRoom }) => {
    return (
        <div>
            <h2>🔔 Door Bell</h2>
            <button onClick={enterRoom}>Press Door Bell</button>
        </div>
    );
};

export default DoorBell;