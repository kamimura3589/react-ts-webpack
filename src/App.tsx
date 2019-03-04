import * as React from 'react';

export interface InterfaceAppProps {
    testMessage: string;
}

class App extends React.Component<InterfaceAppProps, undefined> {
    render() {
        return <div>App{this.props.testMessage}</div>;
    }
}
export default App;
