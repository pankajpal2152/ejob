import ChildA from "./ChildA";

function Navbar({ msg }) {
    return (
        <div style={{ border: "2px solid gray", padding: "10px", margin: "10px" }}>
            <h2>Navbar</h2>
            <p>{msg}</p>

            <ChildA msg={msg} />
        </div>
    );
}

export default Navbar;