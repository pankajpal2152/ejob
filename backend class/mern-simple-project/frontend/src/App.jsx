import { useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/users");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>MERN Users Viewer</h1>

      <button onClick={loadUsers}>Load Users</button>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;