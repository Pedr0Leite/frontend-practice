import React, { useEffect, useReducer } from "react";

const ACTIONS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
}

function reducer(projState, action) {
  switch (action.type) {
    case ACTIONS.ALL:
      projState = ACTIONS.ALL;
      break;
    case ACTIONS.ACTIVE:
      projState = ACTIONS.ACTIVE;
      break;
    case ACTIONS.COMPLETED:
      projState = ACTIONS.COMPLETED;
      break;
    default:
      projState = ACTIONS.ALL;
      break;
  }

  return projState;
}


export default function Navbar(props) {

const [projState, dispatch] = useReducer(reducer, 'all');


useEffect(() => {
  props.handleClick(projState);
},[projState]);

  return (
<div className="nav">
            <div className="todo-title">
                <h1>#todo</h1>
            </div>
            <div className="nav-options">
            <button className="nav-options-button" onClick={() => dispatch({type: ACTIONS.ALL})}>All</button>
            <button className="nav-options-button" onClick={() => dispatch({type: ACTIONS.ACTIVE})}>Active</button>
            <button className="nav-options-button" onClick={() => dispatch({type: ACTIONS.COMPLETED})}>Completed</button>
        </div>
    <hr/>
</div>
  )
}
