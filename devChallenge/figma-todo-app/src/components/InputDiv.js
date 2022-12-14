import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoEntries from './TodoEntries';


export default function InputDiv(props) {

    const [loading, setLoading] = useState(true);

    class Entry {
        constructor(value, sysid, active) {
            this.value = value;
            this.sysid = sysid;
            this.active = active;       
        }
}

    const [entryText, setEntryText] = useState('');
    const [entry, setEntry] = useState([]);
    
    const parentState = props.currentState;
    
    useEffect(() => {
        //Load localStorage entries
        const localStorageItems = localStorage.getItem('entry');
        const arrOfEntries = JSON.parse(localStorageItems);
        
        if(arrOfEntries !== null){
   
            arrOfEntries.forEach(x=>{                        
                var storedEntry = new Entry(x.value, x.sysid, x.active);
                
                setEntry(prevArray => [...prevArray, storedEntry]);
            })
        }
        
    }, []);

const onChangeInput = (e) => {
    e.preventDefault();
    setEntryText(e.target.value)
}

const onClickAddEntry = () => {
    var uniqueID = uuidv4();
    var newEntry = new Entry(entryText, uniqueID, true);

    
    setEntry(prevArray => [...prevArray, newEntry]);
    setEntryText('');
}

    const handleCompleteTodo = (sysid) => {
        //Update entry active flag
        var index = entry.findIndex(x => x.sysid === sysid);
        entry[index].active = false;
        //Update localStorage
        localStorage.setItem('entry', JSON.stringify(entry));
    }
    
    const handleNotCompleteTodo = (sysid) => {
        var index = entry.findIndex(x => x.sysid === sysid);
        entry[index].active = true;
        //Update localStorage
        localStorage.setItem('entry', JSON.stringify(entry));
    }
    
    const onClickDeleteAllEntries = () => {
        setEntry([]);
        //Update localStorage
        localStorage.setItem('entry', JSON.stringify([]));
        
    }
    
    const onClickDelete = (sysid) => {
        const arrayWithoutRemoved = entry.filter(obj => obj.sysid !== sysid);
        //Update localStorage
        localStorage.setItem('entry', JSON.stringify(arrayWithoutRemoved));
        setEntry(arrayWithoutRemoved)
    }

    useEffect(() => {
      //Save to localStorage
      localStorage.setItem("entry", JSON.stringify(entry));
    }, [entry]);

    useEffect(() => {
        if(parentState !== 'completed'){
    
          var labels = document.getElementsByTagName("label");
          for (let label of labels) {
            if (label.className === "checkbox-text-2") {
              let _id = label.id.split("-");
              _id.shift();
              _id = _id.join("-");
              document.getElementById(_id).checked = true;
            }
          }
        }
        setLoading(false);
      }, [loading]);


  return ( 
    (parentState === "all" || parentState === "active" || parentState === "") ?
    <>
<div className="input-div">
    <input type="text" id="input-text" onChange={onChangeInput} name="input-text" value={entryText} className="input-text" placeholder="add details" required></input>
    <button id="input-button" onClick={() => {onClickAddEntry()}} className="input-button">Add</button>
</div>
    <TodoEntries setEntry={entry} state={parentState} handleCompleteTodo={handleCompleteTodo} handleNotCompleteTodo={handleNotCompleteTodo} deleteOne={onClickDelete} deleteAll={onClickDeleteAllEntries}></TodoEntries>
    </>
    :
    <>
    <TodoEntries setEntry={entry} state={parentState} handleCompleteTodo={handleCompleteTodo} handleNotCompleteTodo={handleNotCompleteTodo} deleteOne={onClickDelete} deleteAll={onClickDeleteAllEntries}></TodoEntries>
    </>
  )
}