import API from "../services/api";

function UserList({ users, refresh }) {

    const deleteUser = async (id) => {
        await API.delete(`/${id}`);
        refresh();
    };

    return (
        <ul>
            {users.map(u => (
                <li key={u._id}>
                    {u.name} ({u.email})
                    <button onClick={() => deleteUser(u._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default UserList;