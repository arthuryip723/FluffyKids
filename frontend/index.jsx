import { HashRouter } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
// TODO Now I need to build an App

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <Provider><HashRouter><h1>Hello Kids!</h1></HashRouter></Provider>,
        document.getElementById('root')
    );
});