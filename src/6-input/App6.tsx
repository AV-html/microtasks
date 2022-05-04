import React, {useState} from 'react';
import {FullInput} from './components/FullInput';


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

    return (
        <div>
            <hr/>
            <h3>Универсальный input</h3>
            <div>
                <FullInput addMessage={addMessage}/>
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

