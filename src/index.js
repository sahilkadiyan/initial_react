import ReactDOM from 'react-dom/client';
//here we are importing reactDOM from third party library react-dom

import './index.css';
//here app is a component 
import App from './App';
//add 


//here create root is a method 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <App />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

