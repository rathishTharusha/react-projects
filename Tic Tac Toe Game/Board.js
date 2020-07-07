import React, { Component } from 'react'
import Cross from './Cross'
import Circle from './Circle'
import './board.css'

class Board extends Component{
    constructor(props){
        super(props)
        this.state = {
            pattern: [null, null, null, null, null, null, null, null, null],
            boxes: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            isTick: true,
        }
        this.tickSquare = this.tickSquare.bind(this)
        this.restart = this.restart.bind(this)
    }

    tickSquare(event){
        const id = event.target.id
        const newPattern = this.state.pattern
        newPattern[id] = this.state.isTick ? <Cross /> : <Circle />
        this.setState({
            pattern: newPattern,
            isTick: !this.state.isTick
        })
    }

    restart(){
        this.setState({
            pattern: [null, null, null, null, null, null, null, null, null],
            isTick: true,
        })
    }

    render(){

    const userInteraction = this.state.boxes.map((num) => {
        let classname = "box box-" + num
        return (<div 
                    onClick={this.state.pattern[num] === null ? this.tickSquare:""} 
                    className={classname} 
                    id={num} key={num}>
                        {this.state.pattern[num]}
                </div>)
    })

        return(
            <div className="text-center" > 
                <h1>Your Game goes here</h1>
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
                <button className = "btn btn-warning" onClick={this.restart}>
                    Restart 
                </button>
            </div>
  
        )
    }

}

export default Board