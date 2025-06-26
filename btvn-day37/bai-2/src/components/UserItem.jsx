import React from 'react';

function UserItem({ user }) {
    console.log(`UserItem: ${user.name}`);

    return (
        <div style={{
            border: '1px solid #ccc',
            padding: 10,
            marginBottom: 10,
        }}>
            {user.name}
        </div>
    );
}

export default React.memo(UserItem);
