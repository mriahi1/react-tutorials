import React from 'react';
import ReactDOM from 'react-dom';
import './tictac.js';
import Game from './tictac'
import App from './App'
import Api from './Api'
import TodoApp from './Todo'
import './index.css';


ReactDOM.render(
    <div>
        <h1 className="page-title">Learning React</h1>

        <div className="section">
            <h2>ReactJs tutorial: Tic Tac Toe </h2>
            <Game />
            <hr/>
        </div>

        <div className="section">
            <h2>ReactJs Tutorial: Tania jobs</h2>
            <App /> 
            <hr/>
        </div>

        <div className="section">
            <h2>ReactJs Tutorial: Wikipedia API</h2>
            <Api />
            <hr/>
        </div>

        <div className="section">
            <h2>ReactJs Tutorial: DigitalOcean Todo</h2>
            <TodoApp />
            <hr/>
        </div>
    </div>, 
    document.getElementById('root')
);
