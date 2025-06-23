
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login,Home,ProtectedRoute } from './components';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route
                path="/home"
                element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
};

export default App;
