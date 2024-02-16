import React from "react";
import style from './Item.module.scss';

function Item({text}) {
    return(
        <p>
            {text}
        </p>
    );
}

export default Item;