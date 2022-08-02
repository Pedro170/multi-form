import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import { FormStorage } from './contexts/FormContext'

const App = () => {
  return (
    <FormStorage>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </FormStorage>
  );
}

export default App;

