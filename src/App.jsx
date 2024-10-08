import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Birth from "./pages/Birth";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* 페이지 */}
        <Route exact path="/" element={<Birth />} />
      </Routes>
    </div>
  );
}

export default App;
