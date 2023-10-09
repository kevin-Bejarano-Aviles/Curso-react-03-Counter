import React from 'react'
import ReactDOM from "react-dom/client";
// import { App } from './FirstApp';
import { CounterApp } from './CounterApp';
// import { FirstApp } from './FirstApp';


//functional component
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <FirstApp title='Hola, soy kevin'/> */}
    <CounterApp value={20}/>
  </React.StrictMode>
)