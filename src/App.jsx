// import { useState } from 'react'

import './App.css';
import TodoList from './TodoList';

function App() {

  // const [count, setCount] = useState(0);

  return (
    <>
   
      {/* <h1>Counter App</h1>
      <div>

        <button onClick={() => setCount(count + 1)}>++</button><h3>{count}</h3><button onClick={() => setCount(count - 1)}>--</button>
      </div>
      <button className="reset" onClick={() => setCount(0)}>Reset</button> */}

    <TodoList/>
    </>
  )
}

export default App
