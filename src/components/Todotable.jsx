import React from "react";

export default function Todotable({itemList, handleDelete}) {

  const itemRows = itemList.map((item, index) => 
  <tr key = {index}>
    <td>{item.date}</td>
    <td>{item.description}</td>
    <td><button className="del-btn" onClick={() => {handleDelete(index)}}>Delete</button></td>
  </tr>

);
    return(
        <div>
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