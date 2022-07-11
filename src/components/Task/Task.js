import React from "react";
import './Task.css';

function Task({title, body}) {
    return(
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )
}

export default Task;