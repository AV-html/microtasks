import React, {ChangeEvent, useState} from 'react';
import {addMessageType} from '../App6';


type FullInputPropsType = {
    addMessage: addMessageType
}

export const FullInput = (props: FullInputPropsType) => {

    let [title, setTitle] = useState<string>('');
    console.log(title); // Почему вызывается 2 раза?

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    }

    const onClickButtonHandler = () => {
        props.addMessage(title);
        setTitle('');
    }

    return (
        <div>
            <input
                type="text"
                value={title}
                onChange={onChangeInputHandler}
            />

            <button
                type="button"
                onClick={onClickButtonHandler}
            >
                +
            </button>
        </div>
    );
}