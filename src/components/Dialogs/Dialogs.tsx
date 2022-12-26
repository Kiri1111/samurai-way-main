import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";

import {Message} from "./Message/Message";
import {InitialStateType} from "../../redux/dialog-reducer";
import {Redirect} from "react-router-dom";

type DialogPropsType = {
    updateNewMessageBody: (body: string) => void
    onSendMessageClick: () => void
    dialogPage: InitialStateType
    isAuth: boolean
}

export const Dialogs = (props: DialogPropsType) => {
    let state = props.dialogPage
    const newMessageBody = state.newMessageBody;
    let dialogsElements = state.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>);
    let messagesElement = state.messages.map(el => <Message key={el.id} id={el.id} message={el.message}/>);

    const onCliCkButtonPostHandler = () => {
        props.onSendMessageClick()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.currentTarget.value
        props.updateNewMessageBody(body)
    }
    if (!props.isAuth) return <Redirect to={'/login'}/>
    return (

        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElement}</div>

            </div>
            <div>
                <textarea value={newMessageBody} onChange={onChangeHandler}
                          placeholder={'Введите ваше сообщение'}></textarea>
            </div>
            <div>
                <button onClick={onCliCkButtonPostHandler}>Отправить</button>
            </div>
        </div>


    )
}