import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";

function App() {
    return (
        <>
            <Header title={'NEW BODY'}/>
            <Body titleForBody={'NEW BODY'}/>
            <Footer titleForFooter={'Our Footer'}/>
        </>
    );
}

export default App;
