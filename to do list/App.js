import React , {Component} from "react";
import Task from './Task'
import './app.css'

class App extends Component {
    constructor(props){
        super()
        this.state = {
            newTask: '',
            tasks : [],
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        const input = event.target
        const value = input.type === "checkbox" ? input.checked : input.value
        this.setState({
            [input.name]: value, 
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const task = this.state.newTask
        const list = [...this.state.tasks].concat(task)
        if(task !== ''){
            this.setState({
                tasks: list
            })
        }
    }

    render(){
        const taskList = this.state.tasks.map(task => <Task task={task}/>)

        return(
            <div>
                <header><h1>To Do App</h1></header>

    
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <input type="submit" onClick={this.handleSubmit} className="btn btn-success" value="add task" />
                        </div>
                        <input type="text" className="form-control bg-secondary text-white" aria-label="Text input with checkbox" 
                            name="newTask" 
                            value={this.state.newTask}
                            onChange = {this.handleChange}
                            onSubmit = {this.submitChange}
                        />
                    </div>
                        
                <small id="emailHelp" className="form-text text-muted">add task from here</small>
                </div>

                {taskList}
            
            </div> 
        )
    }
    
}

export default App