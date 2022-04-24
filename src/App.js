import { useEffect, useState } from 'react';
import './App.css';
import UserList from './components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UserDetails from './components/UserDetails';
import axios from 'axios';


function App() {
  const [listOfUser, setListOfUser] = useState(null);
  const [waiting, setWaiting] = useState(true);
  useEffect(() => {
    try {
      const getUsers = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUser(res.data);
        setWaiting(false);
      } 
      getUsers();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<UserList data={listOfUser} waiting={waiting} />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
