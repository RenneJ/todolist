import React from "react";

export default function Todotable(props) {

  function handleDelete(deleteIndex) {
    props.setItemList(props.itemList.filter((item, index) => index !== deleteIndex)); // jätetään "uuteen" listaan ne alkiot joiden index on ERI kuin klikatun rivin
  }

  const itemRows = props.itemList.map((item, index) => 
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