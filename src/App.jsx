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

  const printTasks = itemList.map((item) => 
        <tr>
          <td>{item.date}</td>
          <td>{item.description}</td>
        </tr>

  );

  return (
    <div>
      <form onSubmit={addTask}>
      <fieldset>
        <legend>Add todo</legend>
        <label>Description: </label>
        <input type="text" name="description" value={item.description} onChange={changeState}/>
        <label>Date: </label>
        <input type="text" name="date" value={item.date} onChange={changeState}/>
        <input id="add-btn" type="submit" value="Add" />
      </fieldset>
      </form>
      <table>
        <tbody>
          <tr>
            <td><h3>Date</h3></td>
            <td><h3>Description</h3></td>
          </tr>
          {printTasks}
        </tbody>
      </table>
    </div>
  )
}

export default App
