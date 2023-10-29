import React from 'react';

import { Routes, Route, Navigate } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

import MainPage from './components/MainPage/MainPage';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import PlaceGallery from './components/PlaceGallery/PlaceGallery';

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/places/:id" element={<PlaceDetails />} />
        <Route path="/gallery" element={<PlaceGallery />} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
