import { useState } from "react";
import FanRoom from "./components/FanRoom";

function App() {

  const [insideRoom, setInsideRoom] = useState(false);

  const enterRoom = () => {
    setInsideRoom(true);
  };

  const exitRoom = () => {
    setInsideRoom(false);
  };

  return (

    <div style={{ textAlign: "center", marginTop: "40px" }}>

      <h1>🏠 Smart Room Fan System</h1>

      {
        insideRoom
          ? <FanRoom exitRoom={exitRoom} />
          : (
            <div>
              <h2>User Outside Room</h2>
              <button onClick={enterRoom}>Enter Room</button>
            </div>
          )
      }

    </div>

  );
}

export default App;