import React, { useState, useRef } from "react";

function TodoForm({ onAdd }) {
    const [input, setInput] = useState("");
    const inputRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(input);
        setInput("");
        inputRef.current.focus();
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <div className="add-todo">
                <input
                    ref={inputRef}
                    type="text"
                    className="todo-input"
                    placeholder="What is the task today?"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit" className="add-btn">
                    Add Task
                </button>
            </div>
        </form>
    );
}

export default TodoForm;
