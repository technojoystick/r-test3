import React from 'react';
import { Provider } from 'react-redux';
import {Router, Route, Switch, Redirect} from "react-router-dom";

// Pages
import MainLayout from './layouts/mainLayout';

// Store
import {store} from './store/store';

// Utils
import {history} from './utils/history';

// Styles
import './style.css';

// Components
import QuestionBoxContainer from "./containers/questionBoxContainer";
import ResultBox from "./components/resultBox";

export function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <MainLayout>
                    <Switch>
                        <Route path="/" exact component={QuestionBoxContainer} />
                        <Route path="/result" component={ResultBox} />
                        <Redirect to="/" />
                    </Switch>
                </MainLayout>
            </Router>
        </Provider>
    )
}
