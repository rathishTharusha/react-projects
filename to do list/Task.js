import React, {Component} from 'react'
import './tasks.css'

class Task extends Component{
    constructor(props){
        super(props)
        this.state = {
            done: false,
            task:this.props.task,
        }
        this.handleChange =  this.handleChange.bind(this) 
        this.didWork =  this.didWork.bind(this)
    }

    handleChange(event){
        const input = event.target
        const value = input.type === "checkbox" ? input.checked : input.value
        this.setState({
            [input.name] : value, 
        })
        console.log([input.name])
    }

    didWork(){
        this.setState({
            done: !this.state.done
        })
    }

    
    render(){
        const done = (this.state.task !== "" && this.state.done) ? "block" : "none"
        const tick = {
            display: done,
        }
        
        return(    
            <div className="parent">
                <div className="container" onClick={this.didWork}>
                <svg className="task-bar" viewBox="0 0 556 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d)">
                <path d="M1 41C1 18.3563 19.3563 0 42 0H549V15C549 52.0031 519.003 82 482 82H42C19.3563 82 1 63.6437 1 41V41Z" fill="#2BDAC5"/>
                </g>
                <ellipse cx="43.5" cy="40" rx="20.5" ry="19" fill="white"/>               
                <defs>
                <filter id="filter0_d" x="0" y="0" width="556" height="94" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dx="3" dy="8"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                </defs>
                
                </svg>
                <div className="user-input">
                    <input type="text" className="task-text" aria-label="Text input with checkbox"
                        placeholder="add your task here" 
                        name="task" 
                        value={this.state.task}
                        onChange = {this.handleChange}
                        onSubmit = {this.submitChange}
                    />
                </div>
                <div className="tick" style={tick}>
                    <svg width="45" height="37" viewBox="0 0 45 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="-2" x2="20.7146" y2="-2" transform="matrix(0.46551 0.885043 -0.825217 0.564815 0 18.6667)" stroke="#0D0E0E" stroke-width="4"/>
                    <line y1="-2" x2="48.3645" y2="-2" transform="matrix(0.731055 -0.682318 0.582825 0.812598 9.64285 37)" stroke="#0D0E0E" stroke-width="4"/>
                    </svg>

                </div>
                </div>
            </div>
            
        )
    }

}

export default Task