export default function TodoEntries(props) {
  
  const entryObj = props.setEntry;
  const state = props.state;
  console.log('state :', state);

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

  const deleteEntry = (sysid) => {
    localStorage.removeItem(sysid);
  }


  return (
<div className="todo-entries">
    <form className="form-entries">
{state === 'all' ? 

(entryObj.map((ent) => (<div className="todo-entry-div">
  <input type="checkbox" id={ent.sysid} key={ent.sysid} onChange={handleCheckboxChange} ></input>
  <label htmlFor={ent.sysid}> {ent.value}</label><br></br>
      </div>
))) :
(entryObj.filter(entryWithState => 
    entryWithState.active === (state === 'active' ? true : false)
    ).map((ent) => (
    state === 'active' ? 
    (<div className="todo-entry-div">
          <input type="checkbox" id={ent.sysid} key={ent.sysid} onChange={handleCheckboxChange} ></input>
          <label htmlFor={ent.sysid} > {ent.value}</label><br></br>
              </div>
      )  : (
            <div className="todo-entry-div">
          {/* <input type="checkbox" id={ent.sysid} key={ent.sysid} onChange={handleCheckboxChange}></input> */}
          <label htmlFor={ent.sysid} className='checkbox-text-2' > {ent.value}</label>
          <br></br>
          {state === 'completed' &&
          <button className="delete-button" onClick={deleteEntry(ent.sysid)}></button>
          }
          </div>
          )
        )))
      }
      {(state === 'completed' && completedLength !== 0) &&
      <button className='delete-all-button' onClick={props.deleteAll()}>Delete All</button>
    }
    </form>
</div>
  )
}

//className={this.state === item ? 'active' : ''}