import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Pages/Header/Header';
import FormDesigner from './Pages/FormDesigner/FormDesignerl';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Header title={'¡Hola Ruedalibre!'} />} />
          <Route path="/about" element={<FormDesigner />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
