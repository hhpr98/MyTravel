import React from 'react';
import ReactDOM from 'react-dom/client';

import { Routes, Route, Navigate } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

import App from './App';
import './index.css';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/places/:id" element={<PlaceDetails />} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
);