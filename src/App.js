import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { ToDo } from "./pages/To-Do";
import { Timer } from "./pages/Timer";
import { NoPage } from "./pages/NoPage";
import { MaxCount } from "./pages/MaxCount";

export const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/todo" element={<ToDo />}></Route>
        <Route path="/timer" element={<Timer />}></Route>
        <Route path="/maxcount" element={<MaxCount />}></Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
};

export default App;
