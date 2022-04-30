import React from 'react';
import './App.css';
import {App1} from "./1-nested-components/App1";
import {App2} from "./2-map/App2";
import {App3} from "./3-button/App3";


function App() {
    return (
        <>
            <App1/>
            <App2/>
            <App3/>
        </>
    );
}

export default App;
