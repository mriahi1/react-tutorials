import React, {Component} from 'react';
import Table from './Table'
import Form from './Form'
import './app.css';


class App extends React.Component {
    state = {
        tasks: [],
    }

    removeTask =(index) => {
        const {tasks} = this.state

        this.setState({
            tasks: tasks.filter((task, i) => {
                return i !== index
            }),
        })
    }

    handleSubmit = (task) => {
        this.setState({tasks: [...this.state.tasks, task]})
    }

    render() {
        return (

            <div className="container">
                <Form handleSubmit={this.handleSubmit} />
                <Table
                    taskData={this.state.tasks}
                    removeTask={this.removeTask}
                />
            </div>
        )
    }
}

export default App
