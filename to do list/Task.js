import React, {Component} from 'react'

class Task extends Component{
    constructor(props){
        super()
        this.state = {
            done: false,
            task:"",
        }
        this.handleChange =  this.handleChange.bind(this) 
        this.submitChange =  this.submitChange.bind(this)
    }

    handleChange(event){
        const input = event.target
        const value = input.type === "checkbox" ? input.checked : input.value
        this.setState({
            [input.name] : value, 
        })
        console.log([input.name])
    }

    submitChange(event){
        event.preventDefault()
        alert("Added new task named as "+this.state.task)
    }

    render(){
        return(    
            <div className="card text-white bg-secondary m-5 p-0">
                <div class="card-body input-group">
                    <div class="input-group-prepend">
                        <div class="input-group-text" onClick={this.handleChange} >
                            <input type="checkbox" aria-label="Checkbox for following text input" name="done" checked={this.state.done} />
                        </div>
                    </div>
                <input type="text" class="form-control bg-secondary text-white" aria-label="Text input with checkbox" 
                    name="task" 
                    value={this.state.task}
                    onChange = {this.handleChange}
                    onSubmit = {this.submitChange}
                />
                <h4>{this.state.done && "great you have done this work !!!"}</h4> 
                </div>
                
            </div>
            
        )
    }

}

export default Task