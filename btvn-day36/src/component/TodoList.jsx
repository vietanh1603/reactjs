import React from 'react';
import {TodoItem} from '../component';

function TodoList({ todos, onUpdate, onDelete }) {
    if (!todos.length) return <p>No tasks to show</p>;

    return (
        <div className="todo-list">
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default TodoList;
