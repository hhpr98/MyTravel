import React from 'react';

import { Routes, Route, Navigate } from "react-router";
// https://stackoverflow.com/questions/71984401/react-router-not-working-with-github-pages
// Switch to the HashRouter since GitHub pages doesn't support the tech used by the BrowserRouter.
import { HashRouter as Router } from "react-router-dom";

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
