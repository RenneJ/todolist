import { useState } from 'react'
import './App.css'

function App() {
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

  function handleDelete(deleteIndex) {
    setItemList(itemList.filter((item, index) => index !== deleteIndex)); // jätetään "uuteen" listaan ne alkiot joiden index on ERI kuin klikatun rivin
  }

  const itemRows = itemList.map((item, index) => 
        <tr key = {index}>
          <td>{item.date}</td>
          <td>{item.description}</td>
          <td><button className="del-btn" onClick={() => {handleDelete(index)}}>Delete</button></td>
        </tr>

  );

  return (
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
      <table>
        <tbody>
          <tr>
            <td><h3>Date</h3></td>
            <td><h3>Description</h3></td>
          </tr>
          {itemRows}
        </tbody>
      </table>
    </div>
  )
}

export default App
