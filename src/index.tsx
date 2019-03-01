import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './reducers';
import App from './App';

const store = createStore(reducer, {}, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <App testMessage="Hello ts-react-jest app" />
    </Provider>,
    document.getElementById('root'),
);
