function ParentMiddle({ msg }) {
    return (
        <div style={{ border: "2px solid orange", padding: "10px", margin: "10px" }}>
            <h2>Parent Middle</h2>
            <p>{msg}</p>
        </div>
    );
}

export default ParentMiddle;