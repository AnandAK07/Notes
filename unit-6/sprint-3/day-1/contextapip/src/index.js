import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//create context
export const AppContext=createContext();
//provider- it will make what ever your passing global state

//App-->parent component
//we want to make any data as global state data
//we should have one more components 
//put app component in the app context

/*<AppContext>
      <App/>
  </AppContext>
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppContext.Provider value="hello pt web-13">{/*provider */}
      <App/>
  </AppContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
