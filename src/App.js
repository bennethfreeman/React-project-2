import React, {useState} from 'react';
import AddUser from './components/Users/AddUser'; 
import UserList from './components/Users/USersList';

function App() {

  const [usersList, setUsersList] = useState([])

  const useStatehandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name : uName, age : uAge, id : Math.random().toString()}]
    })
  }
  return (
    <div>
      <AddUser onAddUser={useStatehandler}/>
      <UserList users={usersList}/>
    </div>
  );
}

export default App;
