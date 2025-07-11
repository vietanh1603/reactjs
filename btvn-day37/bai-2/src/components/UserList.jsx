import React from 'react';
import UserItem from './UserItem';

const UserList = ({ users }) => {
    return (
        <div style={{marginTop: 20}}>
            {users.map(user => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    );
}

export default UserList;
