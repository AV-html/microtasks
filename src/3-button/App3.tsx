import React from "react";


export const App3 = () => {
    // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello! I\'m Paul!');
    // }
    // const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello! I\'m Peter!');
    // }

    const onClickHandler = (name: string) => {
        console.log(`Hello! I\'m ${name}!`);
    }


    // const foo1 = () => {
    //     console.log(100200);
    // }
    // const foo2 = (num: number) => {
    //     // передать цифру 100200
    //     console.log(num);
    // }

    return (
        <div>
            <hr/>
            <h2>3 - button</h2>

            {/*<button onClick={(event) => {*/}
            {/*    console.log('Hello')*/}
            {/*}}>*/}
            {/*    MyYouTubeChanel-1*/}
            {/*</button>*/}

            <button onClick={() => {
                onClickHandler('Paul')
            }}>
                MyYouTubeChanel-1
            </button>
            <button onClick={() => {
                onClickHandler('Peter')
            }}>
                MyYouTubeChanel-2
            </button>

            {/*<button onClick={foo1}>1</button>*/}
            {/*<button onClick={() => {*/}
            {/*    foo2(100200)*/}
            {/*}}>2*/}
            {/*</button>*/}
            <hr/>
        </div>
    );
}

