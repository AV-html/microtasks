import React from "react";
import {Button} from "./components/Button";


export const App3 = () => {

    const ButtonFoo = (subscriber: string, age: number) => {
        console.log(subscriber, age);
    }

    const Button3Foo = () => {
        console.log('I\'m stupid button!')
    }

    return (
        <div>
            <hr/>
            <h2>3 - universal button</h2>

            <Button name={"MyYouTubeChanel-1"} callback={() => {
                ButtonFoo('Ivan', 21)
            }}/>
            <Button name={"MyYouTubeChanel-2"} callback={() => {
                ButtonFoo('Peter', 23)
            }}/>
            <Button name={"Stupid BUTTON"} callback={Button3Foo}/>
            
            <hr/>
        </div>
    );
}

