import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <React.Fragment>
            <h1>Hello World!</h1>
            <div>
                Try editing <code>src/index.jsx</code> and see what happens when you save.
            </div>
        </React.Fragment>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));
