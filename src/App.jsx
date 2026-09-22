import { Component } from 'react'
import './App.css'
import TaskList from './components/TaskList'
import tasks from "./tasks.json"

class App extends Component{
    state={
       tasks, 
    }
    render(){
        return(
            <>
            <TaskList data={this.state.tasks}></TaskList>
            </>
        )
    }
}
export default App
