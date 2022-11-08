import React from 'react'


function TodoApp2() {
    const numbers = [1, 2, 3, 4, 5];
    
    const listItems = numbers.map((number) =>
      <li>{number}</li>
    );
    return (
      <ul>{listItems}</ul>  //Här infogas hela map-metoden in, dvs. listItems
    );
  }
  
  

export default TodoApp2