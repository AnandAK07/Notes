import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//1.create context
export const AppContext=createContext();

//2.provider-it will make what ever your passing 

/*<AppContext>
      <App/>//its child
  </AppContext>
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppContext.Provider value={"pt web 13"}>
      <App/>
  </AppContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
