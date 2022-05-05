import React, {useState} from 'react';
import {Input} from './components/Input';
import {Button} from './components/Button';


export type addMessageType = (newTitle: string) => void
type ArrayMessageType = Array<MessageType>
type MessageType = {
    message: string
}

export function App6() {

    const [message, setMessage] = useState<ArrayMessageType>([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    const addMessage: addMessageType = (newTitle) => {
        setMessage([{message: newTitle}, ...message])
    }

    let [title, setTitle] = useState<string>('');
    // console.log(title);

    const callbackButtonHandler = () => {
        addMessage(title);
        setTitle('');
    }

    return (
        <div>
            <hr/>
            <h3>Универсальный input</h3>
            <div>
                {/*<FullInput addMessage={addMessage}/>*/}
                <Input title={title} setTitle={setTitle}/>
                <Button name={'+'} callback={callbackButtonHandler}/>

                {
                    message.map((el, index) => {
                        return (
                            <div key={index}>
                                {el.message}
                            </div>
                        )
                    })
                }
            </div>
            <hr/>
        </div>
    );
}

