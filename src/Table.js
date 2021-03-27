import React, {Component} from 'react'
import './table.css';


const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
        </tr>
      </thead>
    )
}

const TableBody = (props) => {
    const rows = props.taskData.map((row, index) => {
    return (
        <tr key={index}>
          <td>{row.title}</td>
          <td>{row.description}</td>
          <td>
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
    const {taskData, removeTask} = props

    if (taskData.length == 0) {
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
            />
          </table>
        </div>
    )
}

export default Table
