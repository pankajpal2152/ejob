function ChildB({ msg }) {
    return (
        <div style={{ border: "2px solid orange", padding: "10px", margin: "10px" }}>
            <h4>Child B</h4>
            <p>{msg}</p>
        </div>
    );
}

export default ChildB;