import './App.css'
import Button from './button';
import React from 'react';

const menuList: string[] = ['Home', 'Menu', 'About', 'Contact us'];

const listItemStyle = {
listStyle: 'none',
padding: '16px',       
}

const containerStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'top',
};



function App() {
  const handleClick = () => {
          alert('You clicked it.......');      
  };

  return (
    <div style={containerStyle}>      
        {menuList.map((item, index) => (
          <li key={index} style={listItemStyle}>
            {item}
          </li>
        ))}  
      <Button style={{ position: 'fixed', }} label='Dont click my button' onClick={handleClick}/>
    </div>
  );
}

export default App
