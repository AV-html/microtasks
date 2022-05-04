import React, {useState} from 'react';

export function App6() {

    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )


    return (
        <div>
            <hr/>
            <h3>Универсальный input</h3>
            <div>
                <div>
                    <input type="text"/>
                    <button>+</button>
                </div>
                {
                    message.map((el, index) => {
                        return (
                            <div key={index}>
                                el.message
                            </div>
                        )
                    })
                }
            </div>
            <hr/>
        </div>
    );
}

