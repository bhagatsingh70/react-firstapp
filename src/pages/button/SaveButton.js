import React from "react"
import { useContext } from "react"
import NoteContext from '../../context/Context';

const SaveButton = (props) => {
   
    const cvalue = useContext(NoteContext);  
     
    return <button type={cvalue.type} className="save-button">{cvalue.name}</button>
}

export default SaveButton