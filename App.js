import './App.css';
import {useState,useContext,useEffect, useRef} from 'react';
import React from 'react';
// import react, {component} from 'react';
// import task from './tasks';
// import task, { subTask } from './tasks';
import {styled} from './global_style';
import { FaTrashAlt } from "react-icons/fa";




function App() {
 
  const [value,setValue]=useState('')
  const [arr,setArr]=useState([])
  const [item,setSearch]=useState('')
 

  const addArr=()=>{
    if (value !== "") {
      setArr([
        ...arr,
        {
          value: value,
          isCompleted: false
        }
      ]);
      setValue("");
    }
  }
const inpRef=useRef(null)

useEffect(()=>{
  inpRef.current.focus()
},[]);
  


function handleFinish(e) {
  const id = e.target.id;

  if (arr[id].isCompleted) {
    arr[id] = {
      ...arr[id],
      isCompleted: false
    };
    setArr([...arr]);
  } else {
    arr[id] = {
      ...arr[id],
      isCompleted: true
    };
    setArr([...arr]);
  }
}
function handleDelete(e) {
  const id = e.target.id;

  const filteredArray = arr.filter((val, index) => {
    return index !== id;
  });
  setArr(filteredArray);
}
  return (
   
    <div>
<body>
      <input type="search" onChange={(event)=>{setSearch(event.target.value)}} placeholder="search of item" />
      

      <br/>
          <input ref={inpRef} autoFocus type="text" onChange={(e)=> setValue(e.target.value)} value={value} />

          <button style={styled.button} onClick={addArr}>show arr</button>
          {/* <button style={styled.button} onClick={handleDelete}>- arr</button> */}

{

  arr.filter((val)=>{
  if (item == ""){
      return val;
    }else if (val.item.toLowerCase().includes(item.toLowerCase())){
    return val;}
  }).map((val,id)=>{
    return <ul key={id}>
      <li  id={id}
                onClick={handleFinish}
                style={
                 val.isCompleted
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "none" }
                }>{val.value}</li>
                 <FaTrashAlt
                style={{ cursor: "pointer" }}
                id={id}
                onClick={handleDelete}
              />
    </ul>
   
 })
}
</body>
  </div>
  );
}
export default App;
