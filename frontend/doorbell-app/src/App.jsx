import { useState } from "react";
import DoorBell from "./components/DoorBell";
import FanRoom from "./components/FanRoom";

function App() {

  const [insideRoom, setInsideRoom] = useState(false);

  const enterRoom = () => {
    setInsideRoom(true);
  };

  const leaveRoom = () => {
    setInsideRoom(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>

      <h1>🏠 Smart Door Bell App</h1>

      {
        insideRoom ? (
          <FanRoom leaveRoom={leaveRoom} />
        ) : (
          <DoorBell enterRoom={enterRoom} />
        )
      }

    </div>
  );
}

export default App;