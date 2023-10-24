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

  const [treasureLocation, 
  setTreasureLocation] = useState(Math.floor(Math.random() * board.length))

  const [bombLocation, 
    setBombLocation] = useState(Math.floor(Math.random() * board.length))

    console.log("treasure", treasureLocation)
    console.log("bomb", bombLocation)


  // handles all of the game play the user does
  const handleGamePlay = (index) => {
      // let us know what index we are clicking on
    // alert(index)

    // variable that makes a copy of state "board" variable
    let updatedBoard = [...board] 

    // evaluate whether treasureLocation is the same as the location 
      // that the user clicked, if so update the value with a treasure emoji
      
      if(treasureLocation === index){
        updatedBoard[index] = "💎"
        setBoard(updatedBoard)
      } // check the bomb location
      else if(bombLocation === index){
        updatedBoard[index] = "🍫"
        setBoard(updatedBoard)
      } else {
        // update a single instance (the one that gets clicked on)
        updatedBoard[index] = "🧁"
        setBoard(updatedBoard)
      }


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
