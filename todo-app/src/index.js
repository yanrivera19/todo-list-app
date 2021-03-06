import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import history from "./history";

import "./stylesheet.css";
import App from "./components/App";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <HistoryRouter history={history}>
            <App />
        </HistoryRouter>
    </Provider>,
    document.getElementById("root")
);
