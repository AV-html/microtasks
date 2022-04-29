import {Header} from "./site/Header";
import {Footer} from "./site/Footer";
import {Body} from "./site/Body";


export const App1 = () => {
    return (
        <>
            <hr/>
            <h2>1 - Nested Components</h2>
            <Header title={'NEW BODY'}/>
            <Body titleForBody={'NEW BODY'}/>
            <Footer titleForFooter={'Our Footer'}/>
            <hr/>
        </>
    );
}
