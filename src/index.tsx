import React from 'react';
import ReactDOM from 'react-dom/client';

import { Routes, Route, Navigate } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

import App from './App';
import './index.css';
import PlaceGallery from './components/PlaceGallery/PlaceGallery';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gallery/:id" element={<PlaceGallery />} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
