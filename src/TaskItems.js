import React from 'react';
import { MdDelete } from 'react-icons/md';

function TaskItems(props) {

    const tasks = props.tasks;
    const TaskItems = tasks.map( (task) => {
        
        return <div className='list' key={task.key}>
            <p>
                { task.text }
                <span>
                    <MdDelete className='icon ' 
                    onClick={ () => props.deleteTask(task.key)}/>
                </span>
            </p>

            
        </div>
    })

    return (
        <div>
            { TaskItems }
        </div>
    )
}

export default TaskItems;
