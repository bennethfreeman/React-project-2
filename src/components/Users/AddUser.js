import React, {useState} from "react";
import Card from "../UI/Card";
import Button from '../UI/Button'
import classes from './AddUser.module.css'
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [enteredName, setEnteredName] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()

    const AddUserHandler = (event) => {
        event.preventDefault()
        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({title: 'invalid input', message : 'please enter valid name and age'});
            return;
        }
        if(+enteredAge < 1){
            setError({title: 'invalid age', message : 'please enter valid age'})
        }
        props.onAddUser(enteredName, enteredAge)
        setEnteredAge('')
        setEnteredName('')
    }

    const userNameHandler = event => {
        setEnteredName(event.target.value)
    }

    const ageHandler = event => {
        setEnteredAge(event.target.value)
    } 

    const errorHandler = () => {
        setError(null)
    }
    return(
      <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
            <form onSubmit={AddUserHandler}>
                <label htmlFor="username">Username : </label>
                <input id="username" type='text' onChange={userNameHandler} value={enteredName}></input>
                <label htmlFor="age">Age (Years) : </label>
                <input id="age" type='number' onChange={ageHandler} value={enteredAge}></input>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </div>
    )
}

export default AddUser;