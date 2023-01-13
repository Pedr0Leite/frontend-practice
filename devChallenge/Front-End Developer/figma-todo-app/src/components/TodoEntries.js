export default function TodoEntries(props) {

  const entryObj = props.setEntry;
  const state = props.state;

  const completedLength = entryObj.filter(x => x.active === false).length;

  const handleCheckboxChange = (event, sysid) => {
    if (event.target.checked) {
      // console.log('✅ Checkbox is checked: ' + event.target.id);
      document.getElementById('label-' + sysid).className = 'checkbox-text-2';
      props.handleCompleteTodo(event.target.id);
    } else {
      // console.log('⛔️ Checkbox is NOT checked');
      document.getElementById('label-' + sysid).className = 'checkbox-text-1';
      props.handleNotCompleteTodo(event.target.id);
    }
  }

  function deleteEntry(e, sysid){
    e.preventDefault();
    props.deleteOne(sysid);
    
  }

  return (
<div className="todo-entries">
    <form className="form-entries">
      <ul>
{state === 'all' ? 

(entryObj
  .map((ent) => (
  <li key={ent.sysid}>

  <div className="todo-entry-div">
  <input type="checkbox" id={ent.sysid} key={ent.sysid} onChange={(e) => {handleCheckboxChange(e, ent.sysid)}} ></input>
  <label id={'label-' + ent.sysid} htmlFor={ent.sysid} className={ent.active === false ? 'checkbox-text-2' : 'checkbox-text-1'}> {ent.value}</label>
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

          <input type="checkbox" id={ent.sysid} key={ent.sysid} onChange={(e) => {handleCheckboxChange(e, ent.sysid)}} ></input>
          <label id={'label-' + ent.sysid} htmlFor={ent.sysid} className={ent.active === false ? 'checkbox-text-2' : 'checkbox-text-1'}> {ent.value}</label><br></br>
          </div>
          </li>

) : (
        <li key={ent.sysid}>

          <div className="todo-entry-div">
          <label id={'label-' + ent.sysid} htmlFor={ent.sysid} className={ent.active === false ? 'checkbox-text-2' : 'checkbox-text-1'} > {ent.value}</label>
          <br></br>
          {state === 'completed' && <button id="delete-button" className="delete-button" onClick={(e) => {deleteEntry(e,ent.sysid)}}></button>}
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