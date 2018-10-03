// Libs
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './components/app'
import thunk from 'redux-thunk';

// Styles
import './assets/styles.css';

// Reducers
import rootReducer from './reducers'

// Stores
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer)


// Index Render
render((
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
), document.getElementById('root'))