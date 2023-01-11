import React,{useState,use} from 'react';
import "./Style.css";
const UsedToDoList = ((props) => {
  
    return (
        <div className="List" >
            <button onClick={()=>{ props.onSelect(props.id)}}>x</button>
            <li>{props.Item}</li>
            </div>
        
    )
})
export default UsedToDoList;