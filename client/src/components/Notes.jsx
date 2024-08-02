import React,{useState} from 'react'
import AddNotes from './AddNotes'
import { DndProvider } from "react-dnd";
import DisplayNotes from './DisplayNotes'
import { HTML5Backend } from "react-dnd-html5-backend";


function Notes() {
  return (
    <div>
      <AddNotes />
      <div className='flex flex-col'>
        <DisplayNotes />
      </div>
    </div>
  );
}

export default Notes