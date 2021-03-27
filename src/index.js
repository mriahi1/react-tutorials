import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './tictac.js';
import Game from './tictac'
import App from './TaskApp'
import Api from './Api'
import './index.css';


class MainApp extends Component {
    initialState = {
        incomplete_task_count: 0,
        complete_task_count: 0,
    }
    
    state = this.initialState

    render() {
        return (
            <div>
                <h1 className="page-title">Learning React</h1>

                <div className="section">
                    <h2>ReactJs tutorial: Tic Tac Toe </h2>
                    <Game />
                    <hr/>
                </div>

                <div className="section">
                    <h2>ReactJs Tutorial: Tania jobs modified for tasks and added chart</h2>
                    <App /> 
                    <hr/>
                </div>

                <div className="section">
                    <h2>ReactJs Tutorial: Wikipedia API</h2>
                    <Api />
                    <hr/>
                </div>
            </div>
        );
      }
}


ReactDOM.render(
    <MainApp />, 
    document.getElementById('root')
);
