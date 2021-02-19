import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return <div id="test-id">Hello from React.</div>;
}

ReactDOM.render(React.createElement(App), document.querySelector('#root'));
