import React, { Component } from 'react';
import TaskItems from './TaskItems';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            currentTask: {
                text: '',
                key: ''
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    handleInput( e ) {
        this.setState({
            currentTask: {
                text: e.target.value,
                key: Date.now()
            }
        })
    }

    addTask( e ){
       e.preventDefault();
       const newTask = this.state.currentTask;
       console.log(newTask);

       if(newTask.text !== '') {
           const newTasks = [... this.state.tasks, newTask];
           this.setState({
               tasks: newTasks,
               currentTask: {
                   text: '',
                   key: ''
               }
           })
       }
    }
    deleteTask(key){
        const filteredTasks = this.state.tasks.filter( task => task.key!==key);

        this.setState({ tasks:filteredTasks})
    }
    render() {
        return (
            <>
                {/* form where the user will enter the task and add to the with the button next to input */}
                <header>
                    <form id='to-do-form' onSubmit={ this.addTask }>
                        <input type='text' placeholder='Enter Task' value={ this.state.currentTask.text } onChange={ this.handleInput } />
                        <button type='submit'>Add</button>
                    </form>
                </header>

                {/* all added tasks listed */}
                <TaskItems tasks = { this.state.tasks } 
                deleteTask={ this.deleteTask } />
            </>
        )
    }
}


export default ToDo