import './index.css';
import {store} from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateType} from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {StoreContext} from './StoreContext';
import {Provider} from "./StoreContext";


let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App
                    //store={store}
                />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})