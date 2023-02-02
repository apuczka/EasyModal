import React, { useState } from "react";
import Button from "./UI/Button";

const Input = (props) => {
const [eneteredValue, setEnteredValue] = useState('');
const [isValid, setIsValid] = useState(true);

const formSubmit = e => {
  e.preventDefault();
  if(eneteredValue.trim().length === 0) {
    setIsValid(false)
    alert( 'wpisz coś');

  }


};


  return (
    <form onSubmit={formSubmit}>
      <div>
        <label>Username</label>
        <input type="text"></input>
      </div>
      <div>
        <label>Age (Years)</label>
        <input type="number"></input>
      </div>
      <Button type='submit'>Add User</Button>
    </form>
  );
};

export default Input;
