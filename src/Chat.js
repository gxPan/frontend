import React, { useState } from "react";

function Chat() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const handleClick = () => {
        fetch(`http://localhost:8080/api/${input}`)
            .then((response) => response.text())
            .then((data) => setOutput(data));
    };

    return (
        <div className="App">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleClick}>
                Send
            </button>
            <div>
                {output}
            </div>
        </div>
    );
}

export default Chat;
