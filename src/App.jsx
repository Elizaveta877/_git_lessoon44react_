import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAppContext } from './context/AppContext';
import UserList from './components/UserList';

const App = () => {
  
  const { theme, toggleTheme } = useAppContext();


  const appStyle = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    minHeight: '100vh',
    width: '100%',
    padding: '20px',
    border: '3px solid green'
  };

  return (
    <div style={appStyle}>
      <h2>App (Рівень 1)</h2>
      
     
      <button onClick={toggleTheme} style={{ padding: '10px', marginBottom: '20px' }}>
        Змінити тему: **{theme.toUpperCase()}**
      </button>


      <UserList />
      
   

  
      
    </div>
  );
};

export default App;
