import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoEntries from './TodoEntries';


export default function InputDiv(props) {

    class Entry {
        constructor(value, sysid) {
            this.value = value;
            this.sysid = sysid;
            this.active = true;       
        }
}

    const [entryText, setEntryText] = useState('');
    const [entry, setEntry] = useState([]);
    
    const parentState = props.currentState;
    
    useEffect(() => {
        //Load localStorage entries
        const localStorageItems = { ...localStorage };

        const items = Object.keys(localStorageItems);

        items.forEach(x=>{
            var i = localStorage.getItem(x);
            var iObj = JSON.parse(i);

            var storedEntry = new Entry(iObj.value, iObj.sysid);
            
            setEntry(prevArray => [...prevArray, storedEntry]);
        })

      }, []);
    

const onChangeInput = (e) => {
    e.preventDefault();
    setEntryText(e.target.value)
}

const onClickAddEntry = () => {
    var uniqueID = uuidv4();
    var newEntry = new Entry(entryText, uniqueID);
    
    //Save to localStorage
    localStorage.setItem(uniqueID, JSON.stringify(newEntry));
    
    setEntry(prevArray => [...prevArray, newEntry]);
    setEntryText('');
}

    const handleCompleteTodo = (sysid) => {
        //Update entry active flag
        var index = entry.findIndex(x => x.sysid === sysid);
        entry[index].active = false;
    }
    
    const handleNotCompleteTodo = (sysid) => {
        var index = entry.findIndex(x => x.sysid === sysid);
        entry[index].active = true;
    }

    const onClickDeleteAllEntries = () => {
        //Delete all entries from localStorage
        localStorage.clear();
    }

    const onClickDelete = (sysid) => {
        // console.log(entry)
        // localStorage.removeItem(sysid);
        // const arrayWithoutRemoved = entry.filter(obj => obj.id !== sysid);
        // console.log('arrayWithoutRemoved :', arrayWithoutRemoved);

    }


  return ( (parentState === "all" || parentState === "active" || parentState === "") ?
    <>
<div className="input-div">
    <input type="text" id="input-text" onChange={onChangeInput} name="input-text" value={entryText} className="input-text" placeholder="add details" required></input>
    <button id="input-button" onClick={onClickAddEntry} className="input-button">Add</button>
</div>
    <TodoEntries setEntry={entry} state={parentState} handleCompleteTodo={handleCompleteTodo} handleNotCompleteTodo={handleNotCompleteTodo} deleteEntry={onClickDelete} deleteAll={onClickDeleteAllEntries}></TodoEntries>
    </>
    :
    <TodoEntries setEntry={entry} state={parentState} handleCompleteTodo={handleCompleteTodo} handleNotCompleteTodo={handleNotCompleteTodo} deleteEntry={onClickDelete} deleteAll={onClickDeleteAllEntries}></TodoEntries>
  )
}

// //Set item
// localStorage.setItem('myCat', 'Tom');
// //Get item
// var cat = localStorage.getItem("myCat");
// //Remove item
// localStorage.removeItem("lastname");
// //Remove all items
// localStorage.clear();