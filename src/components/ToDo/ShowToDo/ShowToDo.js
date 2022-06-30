import './ShowToDo.css'
import React from "react";

function ShowToDo({text,id,del}) {
    return (
        <div className="internal-div-1">
        <p className="list">{text} <input type="checkbox"/><button className="delete" onClick={()=> del(id)}>Delete</button></p>
        
        </div>
    );
}
export default ShowToDo;