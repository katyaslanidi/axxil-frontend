import React from "react";
import styles from './Item.module.scss';

function Item({text}) {
    return(
        <p className={styles.item}>
            {text}
        </p>
    );
}

export default Item;