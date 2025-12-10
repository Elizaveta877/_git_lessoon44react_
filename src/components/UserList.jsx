import React from 'react';
import { useAppContext } from '../context/AppContext';
import UserProfile from './UserProfile';

const UserList = () => {

  const { users, selectUser, activeUser } = useAppContext();

  const listStyle = {
    border: '2px dashed blue', 
    padding: '15px', 
    margin: '10px 0',
    display: 'flex',
    gap: '20px'
  };

  return (
    <div style={listStyle}>
      <div>
        <h4>📋 UserList (Рівень 2)</h4>
        <ul>
          {users.map(user => (
            <li 
              key={user.id} 
              onClick={() => selectUser(user.id)}
              style={{
                cursor: 'pointer',
                fontWeight: activeUser && activeUser.id === user.id ? 'bold' : 'normal',
                backgroundColor: activeUser && activeUser.id === user.id ? 'lightblue' : 'transparent',
                padding: '5px',
                marginBottom: '5px'
              }}
            >
              {user.name} ({user.role})
            </li>
          ))}
        </ul>
        <p style={{ fontSize: 'small', fontStyle: 'italic' }}>
          
        </p>
      </div>
      
 
      <UserProfile />
    </div>
  );
};

export default UserList;