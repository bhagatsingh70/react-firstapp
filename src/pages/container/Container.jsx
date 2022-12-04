
import { useState, createContext, useContext } from "react";


function Container(props){
     const user = useContext(useContext);
     const {title, name} = {...props};
     return <div className="dev-container"> <p><b>{title} {user} {}</b> </p> {props.children}</div>
}

export default Container