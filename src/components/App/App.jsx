import {Messages} from "../Messages";
import './App.css'

const App = () => {
    return <div id="test-id">
        <h2 className="title">Hello from React.</h2>
        <Messages messages={
            ['First Message', 'Second message', 'Third message']
        }/>
    </div>;
};

export {App};
