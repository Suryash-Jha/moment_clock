import React from 'react';
import logo from './assets/logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import ViewPage from './pages/ViewPage.tsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="view" element={<ViewPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
