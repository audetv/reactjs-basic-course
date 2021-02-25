import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './components/App';

const state = {
    messages: [
        {
            text: 'Hello world!',
            author: 'User',
        },
        {
            text: 'How are you?',
            author: 'User',
        }
    ],
}

ReactDOM.render(
    <App state={state}/>,
    document.querySelector('#root')
);
