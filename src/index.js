import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './app';

function main() {
    const root = document.querySelector('#root'); // eslint-disable-line no-undef

    ReactDOM.render(<App />, root);
}

main();
