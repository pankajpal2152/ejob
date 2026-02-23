import ChildLeft from "./ChildLeft";

function ParentLeft({ msg }) {
    return (
        <div style={{ border: "2px solid orange", padding: "10px", margin: "10px" }}>
            <h2>Parent Left</h2>
            <p>{msg}</p>

            <ChildLeft msg={msg} />
        </div>
    );
}

export default ParentLeft;