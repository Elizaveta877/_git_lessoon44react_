import React from 'react';
import { useAppContext } from '../context/AppContext';

const UserProfile = () => {

  const { activeUser, theme } = useAppContext();

  if (!activeUser) {
    return <div style={{ padding: '15px', border: '1px solid gray' }}>Виберіть користувача зі списку, щоб переглянути його профіль.</div>;
  }
  
  const profileStyle = {
    padding: '15px',
    border: `2px solid ${theme === 'dark' ? 'yellow' : 'purple'}`,
    borderRadius: '8px',
    backgroundColor: theme === 'dark' ? '#222' : '#f0f0f0',
    color: theme === 'dark' ? '#eee' : '#333'
  };

  return (
    <div style={profileStyle}>
      <h4>👤 UserProfile (Рівень 3)</h4>
      <p>
        **Ім'я:** {activeUser.name}
      </p>
      <p>
        **Email:** {activeUser.email}
      </p>
      <p>
        **Роль:** **{activeUser.role}**
      </p>
      <p style={{ fontSize: 'small', fontStyle: 'italic' }}>
          
      </p>
    </div>
  );
};

export default UserProfile;