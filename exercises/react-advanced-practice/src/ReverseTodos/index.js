import React, { useState } from 'react';

function ReversTodos() {

  const reverseTodos = () => {
   setData([...data].reverse())
  }
  
  const [data, setData] = useState(
    [
      {
        id: 'todo1',
        title: 'todo1',
        createdAt: '18:00'
      },
      {
        id: 'todo2',
        title: 'todo2',
        createdAt: '20:30'
      },
      {
        id: 'todo3',
        title: 'todo3',
        createdAt: '21:30'
      }
    ]
  )
  


  const createTodos = () => {
    return data.map((todo) => {
      return (
        <li key={todo.title}>{todo.title}<input type="text" /><span>{todo.createdAt}</span></li>
      )
    })
  }

  return(
    <div>
      <button onClick={reverseTodos}>Reverse</button>
      <ul>
        {createTodos()}
      </ul>
    </div>
  )
}

export default ReversTodos;
