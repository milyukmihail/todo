import React from 'react';
import './bootstrap/main.css';

const el = () =>
    <div className="container align-self-center text-center mt-20 ml-45">
        <div className="row">
                <div className="col-6">
                    <h1>Todo List</h1>
                </div>
        </div>
        <div className="row">
            <div className="col-sm-4 text-left">
                    <p>Tested</p>
            </div>
            <div className="col-xs">
                <button type="button" className="btn btn-danger">!</button>
            </div>
            <div className="col-xs">
                <button type="button" className="btn btn-success">X</button>
            </div>
        </div>
    </div>

export default el;
