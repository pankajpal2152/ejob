import { useEffect, useState } from "react";
import API from "./services/api";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {

  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await API.get("/");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>MERN User App</h1>

      <AddUser refresh={fetchUsers} />
      <UserList users={users} refresh={fetchUsers} />

    </div>
  );
}

export default App;