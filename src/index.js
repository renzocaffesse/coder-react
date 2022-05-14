import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhzCW40U0mZfQBZF_rzvy5FrMQepuDNp4",
  authDomain: "ecommerce-react-97da6.firebaseapp.com",
  projectId: "ecommerce-react-97da6",
  storageBucket: "ecommerce-react-97da6.appspot.com",
  messagingSenderId: "428239261290",
  appId: "1:428239261290:web:14a0a07487b9a835f58413"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
