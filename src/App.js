import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import React from 'react'
import Pagination from './Components/Pagination';
import Routing from './Routes/Routing';

function App() {
  const [name, setName] = React.useState('deepak')
  const changeName = (value)=>{
    setName(value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Routing/>
      </header>
    </div>
  );
}

export default App;
