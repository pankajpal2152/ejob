function ChildLeft({ msg }) {
    return (
        <div style={{ border: "2px solid green", padding: "10px", margin: "10px" }}>
            <h3>Child Left</h3>
            <p>{msg}</p>
        </div>
    );
}

export default ChildLeft;