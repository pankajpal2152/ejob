import ChildRight from "./ChildRight";

function ParentRight({ msg }) {
    return (
        <div style={{ border: "2px solid orange", padding: "10px", margin: "10px" }}>
            <h2>Parent Right</h2>
            <p>{msg}</p>

            <ChildRight msg={msg} />
        </div>
    );
}

export default ParentRight;