import { Fragment } from "react";
import SaveButton from "./SaveButton";

function Button(props){
    return <Fragment>
                <button className="submit-button">{props.name}</button>
                <SaveButton save={props.save}></SaveButton>
            </Fragment>
    ;
}

export default Button