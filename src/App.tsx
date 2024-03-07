import React from 'react';

import { Routes, Route } from "react-router-dom";

// Layouts
import Layout from './Layout';

// Import Routes all
import { publicRoutes } from "./routes";

function App() {

  return (
    <React.Fragment>
      <Routes>
        {publicRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={<Layout>{route.component}</Layout>}
            key={idx}
          />
        ))}
      </Routes>
    </React.Fragment>
  )
}

export default App
