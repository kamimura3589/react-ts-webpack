import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './reducers';
import Root from './routes';

const store = createStore(reducer, {}, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Root />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);
