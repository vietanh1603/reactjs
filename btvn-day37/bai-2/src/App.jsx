import React, { useState } from 'react';
import UserList from './components/UserList';

const Users = [
    { id: 1, name: 'Nguyễn Văn A' },
    { id: 2, name: 'Trần Thị B' },
    { id: 3, name: 'Lê Văn C' },
];
function App() {
    const [users, setUsers] = useState(Users);
    const [point, setPoint] = useState(0);

    return (
        <div style={{ maxWidth: 500, margin: '0 auto', padding: 20 }}>
            <h2>User List</h2>
            <button onClick={() => setPoint(prev => prev + 1)}>
                Point: {point}
            </button>

            <UserList users={users} />
        </div>
    );
}

export default App;
