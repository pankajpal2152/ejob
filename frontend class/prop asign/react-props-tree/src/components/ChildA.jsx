import ChildB from "./ChildB";

function ChildA({ msg }) {
    return (
        <div style={{ border: "2px solid blue", padding: "10px", margin: "10px" }}>
            <h3>Child A</h3>
            <p>{msg}</p>

            <ChildB msg={msg} />
        </div>
    );
}

export default ChildA;