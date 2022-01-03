import React from "react";

function Input(props){
    return (
        <div className="form_col">
            <label htmlFor={props.name}>{props.placeholder}</label>
            <input type={props.type} name={props.name} 
            id={props.name} placeholder={props.placeholder}
            onChange={props.handler} value={props.value}/>
        </div>
    )
}

export default Input;