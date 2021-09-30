import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from "react-redux"

import { addTask, updateTask, getTasksList } from "../../store/actions"

const Todo = _ => {

    const dispatch = useDispatch()

    const { tasks, loading, error } = useSelector(state => ({
        tasks: state.todo.tasks,
        loading: state.todo.loading,
        error: state.todo.error
    }))

    const [taskName, setTaskName] = useState('')

    useEffect(() => {
        if (tasks && !tasks.length) {
          dispatch(getTasksList());
        }
      }, [dispatch, tasks]);

    const handleValidSubmit = (event) => {
        event.preventDefault();
        if (taskName && taskName.length > 0) {
            dispatch(addTask({
                name: taskName,
                status: 'In Progress'
            }))
            setTaskName('')
        }
    }

    const handleUpdateStatus = (event, taskSelected) => {
        const taskOnHold = taskSelected.status == 'On Hold' ? 'In Progress' : 'On Hold'
        const taskStatus = taskSelected.status == 'In Progress' ? 'Done' : taskOnHold
        event.preventDefault();
        dispatch(updateTask({
            id: taskSelected.id,
            name: taskSelected.name,
            status: taskStatus
        }))
    }

    const taskElements = (tasks) => tasks.map(task => (
        <tr key={task.id}>
            <td>{task.name}</td>
            <td className="text-center">
                <span className="todo--table-link" onClick={(e)=> handleUpdateStatus(e, task)}>
                    {task.status}
                </span>
            </td>
        </tr>
    ))

    return (
        <div className="container">
            <div className="row">
            <div className="col"></div>
            <div className="col-10">
                <div className="todo--header">
                    <h1 className="todo--page-title">TASK MANAGMENT</h1>
                    <h5 className="todo--page-subtitle">TODO APP</h5>
                </div>
                <form 
                    className="todo--create-task" 
                    onSubmit={handleValidSubmit}>
                    <div className="todo--input-task">
                        <input 
                            className="form-control"
                            placeholder="Task"
                            value={taskName}
                            onChange={e => setTaskName(e.target.value)}>    
                        </input>
                    </div>
                    <div className="todo--add-task">
                        <button className="btn btn-primary">Add Task</button>
                    </div>
                </form>
                <div className="todo--table">
                    <table className="table table-striped mb-0">
                        <thead>
                            <tr>
                                <th className="text-center">Task</th>
                                <th className="text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks && taskElements(tasks) }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col"></div>
            </div>
        </div>
    )
}

export default Todo
