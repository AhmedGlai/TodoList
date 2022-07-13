import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
function CreateArea(props){
    const [note,setNote]=useState({
        title:"",
        content:""
    });
    function handleChange(event){
        
        const {name,value}=event.target;
        
        setNote(prevNote=>{
            return{
                
                ...prevNote,
                [name]:value
            };
        });

        
    }
function submitNote(event){
        props.onAdd(note);
    setNote(
        {
            title:" ",
            content:" ",
        }
    );
    event.preventDefault();
    
}

    return(
        <div>
            <form className="createNote">
                <input type="text" placeholder="Title" name="title" onChange={handleChange} value={note.title}/>
                <textarea name="content" placeholder="Take a note..." onChange={handleChange} value={note.content}></textarea>
            
                <Fab size="small" color="primary" onClick={submitNote}>
                    <AddIcon/>
                </Fab>
            </form>
        </div>
    )
}
export default CreateArea;