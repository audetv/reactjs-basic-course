import React from "react";
import {Messages} from "../Messages";

const App = () => {
    return <div id="test-id">
        <h2>Hello from React.</h2>
        <Messages messages={
            ['First Message', 'Second message', 'Third message']
        }/>
    </div>;
};

export {App};
