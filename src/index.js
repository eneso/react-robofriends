import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card'; //its default so can only do Card
import * as serviceWorker from './serviceWorker';
import CardList from './CardList';
import 'tachyons';
import {robots} from './robots'; //its not default so destructuring is needed (can export multiple)

ReactDOM.render(
        <CardList robots={robots}/>
,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
