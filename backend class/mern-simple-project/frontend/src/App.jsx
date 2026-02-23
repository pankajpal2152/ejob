import axios from 'axios';
import React, { useEffect, useState } from 'react';

const User = () => {
  const [users, setUsers] = useState([]);
  const apiUrl = "http://localhost:3000/api/users";

  async function getUsers() {
    try {
      const response = await axios.get(apiUrl);
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h2>Showing All Users:</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Languages</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.languages.join(", ")}</td>
              <td>
                State: {user.address.state} | City: {user.address.city} | Pin: {user.address.pinCode}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;