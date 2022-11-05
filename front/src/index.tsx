import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';


// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
 
//     <App />

// );
reportWebVitals();
ReactDOM.render(
  <React.StrictMode>
     <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();


