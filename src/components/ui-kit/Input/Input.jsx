import React from "react";
import styles from './Input.module.scss';

function Input({
    placeholder,
    id,
    name,

}) {
    return(
        <input
            id={id}
            type='text'
            name={name}
            placeholder={placeholder}
            required
            className={styles.input}
        />
    );
}

export default Input;