import { useState } from 'react'
import './App.css'
import CardLists from './components/CardLists';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <div className="header">
            <h1>Bangladesh Trivia!</h1>           
        </div>

        <div className="container">
          <CardLists />
        </div>
    </div>
  )
}

export default App