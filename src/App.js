import { useState } from 'react';
import classes from './App.module.css';

import UserForm from './components/userForm/UserForm';
import UsersList from './components/listOfUsers/UsersList';

const DATA = [];

function App() {

  const [storeOfData, setStoreOfData] = useState(DATA);

  const dataStore = (userData) => {
    setStoreOfData((prevData) => {
      return [...prevData, userData]
    });
  };

  return (
    <div className={classes.App}>
      
      <UserForm allData={ DATA } onUserData={ dataStore } />
      <UsersList storedData={ storeOfData } />
      
    </div>
  );
}

export default App;
