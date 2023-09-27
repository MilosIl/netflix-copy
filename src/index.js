import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyles } from './global-styles';
import { FirebaseContext } from './Context/firebase';
import { firebase } from './lib/firebase.prod';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles/>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>
);
