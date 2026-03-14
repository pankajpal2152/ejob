import React, { useEffect, useState } from "react";

const FanRoom = ({ exitRoom }) => {

    const [fanTime, setFanTime] = useState(0);

    useEffect(() => {

        console.log("User entered room");
        console.log("Fan started");

        const timer = setInterval(() => {
            setFanTime(prev => prev + 1);
        }, 1000);

        // cleanup when user exits room
        return () => {
            clearInterval(timer);
            console.log("User exited room");
            console.log("Fan stopped");
        };

    }, []);

    return (
        <div>

            <h2>🚪 Inside the Room</h2>

            <h3>🌀 Fan is running</h3>
            <h3>Fan running for {fanTime} seconds</h3>

            <button onClick={exitRoom}>Exit Room</button>

        </div>
    );
};

export default FanRoom;