import React from "react";
import classes from '../Dialogs.module.css';

type MessagePropsType = {
    text: string
}
export const Message = (props: MessagePropsType) => {
    return (
        <div className={classes.dialog}>{props.text}</div>
    )
}