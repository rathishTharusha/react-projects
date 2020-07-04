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

    ondelete(event){
        const remove = event.target.name
        const newList = this.state.tasks.filter(task => task !== remove)
        this.setState({
            tasks: newList,
        })
        console.log("this is task : ", event.target.name)
    }

    render(){
        const taskList = this.state.tasks.map(task => <Task task={task} key={task} remove={this.ondelete}/>)

        if(this.state.newTask.length > 35){
            alert("Your task content has been\n overflowed !!!\nPlease input less than 35 characters.")

        }

        return(
            <div>
                <Title />

                <form className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <input type="submit" onClick={this.handleSubmit} className="btn btn-info" value="add task" />
                        </div>
                        <input type="text" className="form-control bg-secondary text-white" aria-label="Text input with checkbox" 
                            name="newTask" 
                            value={this.state.newTask}
                            onChange = {this.handleChange}
                            onSubmit = {this.submitChange}
                            ref={this.addTask}
                        />
                    </div>
                        
                <small id="emailHelp" className="form-text text-muted">add task from here</small>
                </form>

                {taskList}
            
            </div> 
        )
    }
    
}

export default App