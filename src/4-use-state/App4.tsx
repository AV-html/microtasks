import React, {useState} from 'react';


export const App4 = () => {
    // let count = 1;

    // 1 - count - название переменной
    // 2 - setCount - функция, которая будет изменять значение count
    let [count, setCount] = useState(1);
    // Деструкторизация

    const onClickHandler = () => {
        // ++count;
        setCount(count + 1);
        console.log(count);
    }
    const onClickResetHandler = () => {
        setCount(0);
    }


    return (
        <div>
            <hr/>
            <h2>4 - useState</h2>

            <div>{count}</div>

            <button onClick={onClickHandler}>number</button>

            <button onClick={onClickResetHandler}>0</button>
            <hr/>
        </div>
    );
}

