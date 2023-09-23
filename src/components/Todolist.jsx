import React from "react";
import { useState } from 'react'

import Todotable from './Todotable';

export default function Todolist() {
    const [item, setItem] = useState({description: '', date: ''})
    const [itemList, setItemList] = useState([]);
  
    const changeState = (event) => {
      setItem({...item, [event.target.name]: event.target.value});
    }
  
    function addTask() {
      event.preventDefault();
      setItemList([...itemList, item]);
      setItem({description:'', date:''});
    }
    return(
        <div>
        <form onSubmit={addTask}>
            <fieldset>
                <legend>Add todo</legend>
                <label>Description: </label>
                    <input className="text-input" type="text" name="description" value={item.description} onChange={changeState}/>
                <label>Date: </label>
                    <input className="text-input" type="text" name="date" value={item.date} onChange={changeState}/>
                <input id="add-btn" type="submit" value="Add" />
            </fieldset>
        </form>
        <Todotable itemList = {itemList} setItemList = {setItemList} />
        </div>
    )
}