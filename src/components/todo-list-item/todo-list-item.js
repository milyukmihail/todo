import React, {useState, useEffect} from 'react';
import './todo-list-item.css';

const TodoListItem = ({label}) => {


    const [ important, setImportant] = useState(false);
    console.log(important);
    const style = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    };

    useEffect(() => {
        style.color = 'yellow';
    });

    return (
        <span className="todo-list-item">
      <span
          className="todo-list-item-label"
          onClick={() => setImportant(!important)}
          style={{color: style.color}}>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation"/>
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o"/>
      </button>
    </span>
    );
};

export default TodoListItem;
