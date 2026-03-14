import React, { useEffect, useState } from "react";

const FanRoom = ({ leaveRoom }) => {

  const [fanTime, setFanTime] = useState(0);

  useEffect(() => {

    console.log("Fan started");

    const timer = setInterval(() => {
      setFanTime((prev) => prev + 1);
    }, 1000);

    // cleanup when leaving room
    return () => {
      clearInterval(timer);
      console.log("Fan stopped");
    };

  }, []);

  return (
    <div>
      <h2>🚪 Room</h2>

      <h3>🌀 Fan is running...</h3>
      <h3>Fan running for {fanTime} seconds</h3>

      <button onClick={leaveRoom}>Leave Room</button>
    </div>
  );
};

export default FanRoom;