import * as React from 'react';
import { Route } from 'react-router-dom';
import App from '../App';

class Root extends React.Component {
    render() {
        return <Route path="/" exact component={App} />;
    }
}
export default Root;
