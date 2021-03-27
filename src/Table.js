import React, {Component} from 'react'
import './table.css';


const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Title</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
    )
}

const TableBody = (props) => {
    const rows = props.taskData.map((row, index) => {
    return (
        <tr key={index}>
          <td>{row.title}</td>
          <td>{row.status ? "TODO" : "COMPLETE"}</td>
          <td>
                <button onClick={() => props.completeTask(index)}>Check</button>
                <button onClick={() => props.removeTask(index)}>Delete</button>
          </td>
        </tr>
      )
    })
    return (
      <tbody>{rows}</tbody>
    )
}

const Table = (props) =>  {
    const {taskData, removeTask, completeTask} = props

    if (taskData.length === 0) {
        return (
            <div className="table-container">
                <h2>No tasks yet</h2>
                <h4>Add first task</h4>
            </div>
        )
    }
    return (
        <div className="table-container">
          <table>
            <TableHeader />
            <TableBody
                taskData={taskData}
                removeTask={removeTask}
                completeTask={completeTask}
            />
          </table>
        </div>
    )
}

export default Table
