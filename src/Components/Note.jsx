import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
function Note(props){
    
    function handleClick(){
        props.onDelete(props.id);
    }
    
    return(
        <div className="notestyle">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <button color="red" onClick={handleClick}><DeleteIcon/></button>
            

            

        </div>
    )
}
export default Note;