import { Component } from "react";
import style from "./TaskList.module.css"
class TaskList extends Component{

      state = {
        tasks: this.props.data
    };


    handleButtonClick=(id)=>{
        this.setState((prev)=> ({tasks:prev.tasks.filter(task=>task.id !==id)}))
    }

    render(){
        const { tasks } = this.state;
        return <ul className={style.list}>{tasks.map(({id,text})=>{
            return <li key={id} className={style.item}>
                <h2><span>{id}.</span> {text}</h2>
                <button className={style.btn} type="button" onClick={()=>this.handleButtonClick(id)}>Delete</button>
            </li>
        })}</ul>
    }
}

export default TaskList