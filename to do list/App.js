import React , {Component} from "react";
import Task from './Task'
import Title from './Title'
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
        this.ondelete = this.ondelete.bind(this)
        this.addTask = React.createRef()
    }

    componentDidMount(){
        this.addTask.current.focus()
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
                newTask:'',
                tasks: list
            })
        }
        this.addTask.current.focus()
    }

    ondelete(taskID){
        const newList = this.state.tasks
        newList[taskID] = null
        this.setState({
            tasks: newList,
        })
    }

    render(){
        
        const taskList = this.state.tasks
            .filter(task => task !== null)
            .map(task => <Task taskID={this.state.tasks.indexOf(task)} task={task} key={task} remove={this.ondelete} className="card-body" />)

        if(this.state.newTask.length > 35){
            alert("Your task content has been\n overflowed !!!\nPlease input less than 35 characters.")

        }

        return(
            <div>
                <Title />

                <form className="form-group card">
                    <div className="input-group card-body">
                        <div className="input-group-prepend">
                            <input type="submit" onClick={this.handleSubmit} className="btn btn-info" value="add task" />
                        </div>
                        <input type="text" className="form-control bg-secondary text-white" aria-label="Text input with checkbox" 
                            name="newTask" 
                            value={this.state.newTask}
                            onChange = {this.handleChange}
                            onSubmit = {this.submitChange}
                            ref={this.addTask}
                            placeholder="add your task here" 
                        />
                    </div>
                        
                </form>

                <div className="card bg-info">
                    {taskList.length === 0 ? <p className="text-center text-light">No tasks for now.</p>: taskList}
                </div>
                        
            </div> 
        )
    }
    
}

export default App