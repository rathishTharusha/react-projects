import React, { useState } from 'react'
import Cross from './Cross'
import Circle from './Circle'
import calculateWinner from './winner'
import './board.css'

const Board = () => {
    
    const boxes = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [step ,setStep] = useState(0)
    const [isTick, setIsTick] = useState(true)
    const winner = calculateWinner(history[step])


    const handleClick = (event) => {
        const id = event.target.id
        const timeInHistory = history.slice(0, step + 1)
        const newPattern = [...timeInHistory[step]]
        newPattern[id] = isTick ? "X" : "O"
        
        setHistory([...timeInHistory, newPattern])
        setStep(timeInHistory.length)
        setIsTick(!isTick)
        console.log(newPattern)
        calculateWinner("winner : ",history[step])
    } 

    const restart = () => {
        setHistory([Array(9).fill(null)])
        setStep(0)
        setIsTick(true)
    }

    const goTo = (move) => {
        setStep(move)
        setIsTick(step % 2 === 0)
    }

    const status = winner === "X"
                    ? "Player 'X' won the game !!!"
                    : winner === "O"
                        ? "Player 'O' won the game !!!"
                        : "Your Game goes here"

    const userInteraction = boxes.map((num) => {
        let classname = "box box-" + num
                    
            return (<div 
                onClick={history[step][num] === null && winner === null ? handleClick:null} 
                className={classname} 
                id={num} key={num}>
                    {history[step][num] === "X" 
                        ? <Cross /> 
                        : history[step][num] === "O"
                            ? <Circle />
                            : null 
                    }
                </div>)
            })
                    
    const timePath = history.map((_value, move) => {
        return <button
            className = {move ? "btn btn-primary col m-2" : "btn btn-warning col-12"}
            onClick = {move ? () => goTo(move) : restart}
            key={move}
        >
            {move ? `goto move #${move}`: 'Restart'}
        </button>
    })

    return(
            <div className="text-center" > 
                <h1>{status}</h1>
                <div>
                    <svg className="container" width="403" height="392" viewBox="0 0 403 392" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="403" height="392" rx="90" fill="#30E342"/>
                        <rect x="32" y="26" width="100" height="100" rx="23" fill="#DA4B4B"/>
                        <rect x="152" y="26" width="100" height="100" rx="23" fill="#DA4B4B"/>
                        <rect x="272" y="26" width="100" height="100" rx="23" fill="#DA4B4B"/>
                        <rect x="32" y="266" width="100" height="100" rx="23" fill="#DA4B4B"/>
                        <rect x="152" y="266" width="100" height="100" rx="23" fill="#DA4B4B"/>
                        <rect x="272" y="266" width="100" height="100" rx="23" fill="#DA4B4B"/>
                        <rect x="32" y="146" width="100" height="100" rx="23" fill="#DA4B4B"/>
                        <rect x="152" y="146" width="100" height="100" rx="23" fill="#DA4B4B"/>
                        <rect x="272" y="146" width="100" height="100" rx="23" fill="#DA4B4B"/>
                    </svg>
                </div>

                {userInteraction}
                <br />
                <div className="row m-5">
                    {timePath}
                </div>
            </div>
  
        )
    

}

export default Board