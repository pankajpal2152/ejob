import { useState } from "react";
import DoorBell from "./components/DoorBell";
import FanRoom from "./components/FanRoom";
import "./App.css";

function App() {

  const [roomOpen, setRoomOpen] = useState(false);

  const enterRoom = () => {
    setRoomOpen(true);
  };

  const leaveRoom = () => {
    setRoomOpen(false);
  };

  return (
    <div className="app">

      <h1>🏠 Smart Home System</h1>

      {
        roomOpen
        ? <FanRoom leaveRoom={leaveRoom}/>
        : <DoorBell enterRoom={enterRoom}/>
      }

    </div>
  );
}

export default App;