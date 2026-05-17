import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import ProParkPage from "./pages/ProParkPage";
import AlstomPage from "./pages/AlstomPage";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App grain">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/work/propark" element={<ProParkPage />} />
          <Route path="/work/namma-sarathi" element={<AlstomPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
