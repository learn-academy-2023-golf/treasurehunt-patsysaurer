import React, { useState } from "react"
import Square from './components/Square'
import "./App.css"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  // handles all of the game play the user does
  const handleGamePlay = (index) => {
      // let us know what index we are clicking on
    alert(index)
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="gameboard">
        {board.map((value, index) => {
          return (
            <Square 
           value={value}
           key={index}
           index={index}
           handleGamePlay={handleGamePlay}
           />
          )
        })}
      </div>
    </>
  )
}

export default App
