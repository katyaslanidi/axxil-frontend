import React from "react";
import styles from './Input.module.scss';

function Input({placeholder}) {
    return(
        <input 
            placeholder={placeholder}
        />
    );
}

export default Input;