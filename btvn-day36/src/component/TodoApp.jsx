import React, { useEffect, useState } from 'react';
import { getMethod, postMethod, putMethod, deleteMethod } from '../plugins/api/api.js';
import {TodoForm,TodoList} from '../component';
import '../App.css';



function TodoApp() {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        try {
            const data = await getMethod();
            setTodos(data);
        } catch (err) {
            console.error('Error fetching todos', err);
        }
    };

    useEffect(() => {
        fetchTodos().then();
    }, []);

    const addTodo = async (title) => {
        if (!title.trim()) return;
        const newTodo = await postMethod({ title, completed: false });
        setTodos(prev => [...prev, newTodo]);
    };


    const updateTodo = async (id, updatedTodo) => {
        const updated = await putMethod(id, updatedTodo);
        setTodos(prev => prev.map(todo => todo.id === id ? updated : todo));
    };


    const removeTodo = async (id) => {
        await deleteMethod(id);
        setTodos(prev => prev.filter(todo => todo.id !== id));
    };


    return (
        <div className="container">
            <h1>Get Things Done!</h1>
            <TodoForm onAdd={addTodo} />
            <TodoList
                todos={todos}
                onUpdate={updateTodo}
                onDelete={removeTodo}
            />
        </div>
    );
}

export default TodoApp;
