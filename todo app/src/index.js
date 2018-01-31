import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import CustomLink from './Router';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<CustomLink />, document.getElementById('root'));
registerServiceWorker();
