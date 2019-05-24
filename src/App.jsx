import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Details from './components/Details';

function App() {
    return (
        <React.Fragment>
            <Header headerText={"Hello World"}/>
            <Details />
        </React.Fragment>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));
