import { useState } from "react";
import API from "../services/api";

function AddUser({ refresh }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        await API.post("/", { name, email });

        setName("");
        setEmail("");
        refresh();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <button>Add</button>
        </form>
    );
}

export default AddUser;