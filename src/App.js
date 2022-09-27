import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { ToDo } from "./pages/To-Do";
import { About } from "./pages/About";
import { NoPage } from "./pages/NoPage";

export const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/todo" element={<ToDo />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
};

export default App;
