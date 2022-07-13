import './App.css';
import Header from './Components/Header';
import CreateArea from './Components/createArea';
import { useState } from 'react';
import Note from './Components/Note';
import Footer from './Components/Footer';

function App() {
  const[notes,setNotes]=useState([]);

  function addNote(newNote){
     setNotes(prevNote=>{
      return[...prevNote,newNote];
     })
     
  }
  function deleteNote(id){
    setNotes(prevNote=>{
      return prevNote.filter((newItem,index)=>{
        return index!==id;
      });
    })

  }

  return (
    <div className="App">
    <Header/>
    <CreateArea onAdd={addNote}/>
    {notes.map((noteItem,index)=>{
      return(
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      )
    })}
    <Footer/>
    
    </div>
  );
}

export default App;
