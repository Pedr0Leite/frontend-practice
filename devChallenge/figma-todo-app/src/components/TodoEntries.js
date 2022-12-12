export default function TodoEntries(props) {
  
  const entryObj = props.setEntry;
  const state = props.state;

  const completedLength = entryObj.filter(x => x.active === false).length;

  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      // console.log('✅ Checkbox is checked: ' + event.target.id);
      props.handleCompleteTodo(event.target.id);
    } else {
      // console.log('⛔️ Checkbox is NOT checked');
      props.handleNotCompleteTodo(event.target.id);
    }
  }

  function deleteEntry(e, sysid){
    e.preventDefault();
    // window.localStorage.removeItem(sysid);
    props.deleteOne(sysid);
    
  }

  // const deleteButton = document.getElementById('delete-button');

  // if(deleteButton != null){
  //   deleteButton.addEventListener('click', deleteEntry);

  // }


  return (
<div className="todo-entries">
    <form className="form-entries">
      <ul>
{state === 'all' ? 

(entryObj
  .map((ent) => (
  <li key={ent.sysid}>

  <div className="todo-entry-div">
  <input type="checkbox" id={ent.sysid} key={ent.sysid} onChange={handleCheckboxChange} ></input>
  <label htmlFor={ent.sysid}> {ent.value}</label>
  <br></br>
  </div>
  </li>
))) :
(entryObj
  .filter(entryWithState => entryWithState.active === (state === 'active' ? true : false))
  .map((ent) => (
    state === 'active' ? 
        (
          <li key={ent.sysid}>

          <div className="todo-entry-div">
          <input type="checkbox" id={ent.sysid} key={ent.sysid} onChange={handleCheckboxChange} ></input>
          <label htmlFor={ent.sysid} > {ent.value}</label><br></br>
          </div>
          </li>

) : (
        <li key={ent.sysid}>

          <div className="todo-entry-div">
          <label htmlFor={ent.sysid} className='checkbox-text-2' > {ent.value}</label>
          <br></br>
          {state === 'completed' && <button id="delete-button" className="delete-button" onClick={(e) => {deleteEntry(e,ent.sysid)}}>delete</button>}
          {/* {state === 'completed' && <button id="delete-button" className="delete-button"></button>} */}
          </div>
          </li>

          )
        )))
      }
    </ul>
      {(state === 'completed' && completedLength !== 0) &&
      <button className='delete-all-button' onClick={() => {props.deleteAll()}}>Delete All</button>
    }
    </form>
</div>
  )
}