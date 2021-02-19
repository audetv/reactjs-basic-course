import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return React.createElement('div', {id: 'test-id'}, 'Hello from React.');
}

ReactDOM.render(React.createElement(App), document.querySelector('#root'));
