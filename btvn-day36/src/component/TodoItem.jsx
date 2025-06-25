import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// font awesome
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

function TodoItem({ todo, onUpdate, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(todo.title);

    const handleCheckboxChange = () => {
        onUpdate(todo.id, { ...todo, completed: !todo.completed });
    };

    const handleTitleChange = (e) => {
        setNewTitle(e.target.value);
    };

    const handleEdit = () => {
        const trimmedTitle = newTitle.trim();
        if (isEditing && trimmedTitle !== '' && trimmedTitle !== todo.title) {
            onUpdate(todo.id, {
                ...todo,
                title: trimmedTitle
            });
        }
        setIsEditing(!isEditing);
    };


    const handleDelete = () => {
        if (window.confirm('Bạn có chắc chắn muốn xoá công việc này?')) {
            onDelete(todo.id);
        }
    };

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleCheckboxChange}
            />

            {isEditing ? (
                <input
                    value={newTitle}
                    onChange={handleTitleChange}
                    className="todo-input"
                />
            ) : (
                <div className={`todo-content ${todo.completed ? 'completed' : ''}`}>
                    {todo.title}
                </div>
            )}

            <button className="edit-btn" onClick={handleEdit}>
                <FontAwesomeIcon icon={faPenToSquare} />
            </button>

            <button className="del-btn" onClick={handleDelete}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    );
}

export default TodoItem;
