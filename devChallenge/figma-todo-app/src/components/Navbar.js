import React, { useEffect, useState } from "react";

export default function Navbar(props) {

const [state, setState] = useState('all');

const onClickAll = () => {
  setState('all')

}
const onClickActive = () => {
  setState('active')
  
}
const onClickCompleted = () => {
  setState('completed')
  
}

useEffect(() => {
  props.handleClick(state);
},[state]);

  return (
<div className="nav">
            <div className="todo-title">
                <h1>#todo</h1>
            </div>
            <div className="nav-options">
            <button className="nav-options-button" onClick={onClickAll}>All</button>
            <button className="nav-options-button" onClick={onClickActive}>Active</button>
            <button className="nav-options-button" onClick={onClickCompleted}>Completed</button>
        </div>
    <hr/>
</div>
  )
}
