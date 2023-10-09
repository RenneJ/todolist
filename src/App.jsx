import './App.css';
import { Link, Outlet } from 'react-router-dom';
import React, {useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Todolist from './components/Todolist';

function App() {
  const [value, setValue] = useState('Home');
  const handleChange = (_, value) => {
    setValue(value);
  };
    
return (
  <div className = "App">
    <nav>
      <Link to = {"/"}>Home</Link>
      <Link to = {"/about"}>About</Link>
      <Link to = {"/contact"}>Contact</Link>
    </nav>
    <Outlet />

    <div>
      <Tabs value={value} onChange={handleChange}>
        <Tab value="Home" label="Home" />
        <Tab value="Todos" label="Todos" />
      </Tabs>
      {value === 'Home' && <div>Home page</div>}
      {value === 'Todos' && <div><Todolist /></div>}
    </div>
  </div>
  )
}

export default App
