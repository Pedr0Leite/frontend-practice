import React, { useEffect, useState } from "react";

export default function Navbar(props) {

const [projState, setProjState] = useState('all');

const onClickAll = () => {
  setProjState('all')

}
const onClickActive = () => {
  setProjState('active')
  
}
const onClickCompleted = () => {
  setProjState('completed')
  
}

useEffect(() => {
  props.handleClick(projState);
},[projState]);

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
