import React from 'react';
import Provider from 'react-redux';

// Pages
import MainPage from './pages/mainPage';

import {store} from './store/store';

// Styles
import './style.css';

const App = () => (
    <Provider store={store}>
        <MainPage />
    </Provider>
);

export default App;
