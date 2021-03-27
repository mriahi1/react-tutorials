import React, {Component} from 'react';
import Table from './Table'
import Form from './Form'
import './TaskApp.css';
import BarChart from './chart'


class App extends React.Component {
    state = {
        tasks: [],
        incomplete_task_count: 0,
        complete_task_count: 0,
    }

    removeTask =(index) => {
        const {tasks} = this.state

        this.setState({
            incomplete_task_count: tasks.filter((obj) => obj.status === true).length,
            complete_task_count: tasks.filter((obj) => obj.status === false).length,
            tasks: tasks.filter((task, i) => {
                return i !== index
            }),
        })
    }

    completeTask =(index) => {
        const {tasks} = this.state
        tasks[index].status = !tasks[index].status
        this.setState({
            tasks: tasks,
            incomplete_task_count: tasks.filter((obj) => obj.status === true).length,
            complete_task_count: tasks.filter((obj) => obj.status === false).length,
        })
    }

    handleSubmit = (task) => {
        const tasks = [...this.state.tasks, task]
        this.setState({
            tasks: tasks,
            incomplete_task_count: tasks.filter((obj) => obj.status === true).length,
            complete_task_count: tasks.filter((obj) => obj.status === false).length,
        })
    }

    render() {
        return (

            <div className="container">
                <BarChart todo_count={this.state} />
                <Form handleSubmit={this.handleSubmit} />

                <Table
                    taskData={this.state.tasks}
                    removeTask={this.removeTask}
                    completeTask={this.completeTask}
                />
                
            </div>
        )
    }
}

export default App
