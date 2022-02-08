import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
// import { StyledEngineProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from  './redux/store' 


ReactDOM.render(
    //  <StyledEngineProvider injectFirst>
        <Provider store={store}>
            <App />
        </Provider>
    //  </StyledEngineProvider>
    ,
    document.getElementById('root'));