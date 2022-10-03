import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { ToDo } from "./pages/To-Do";
import { Timer } from "./pages/Timer";
import { NoPage } from "./pages/NoPage";
import { MaxCount } from "./pages/MaxCount";
import { ProgressBar } from "./pages/ProgressBar";
import { EmployeeList } from "./pages/EmployeeList";
import EmployeeContextProvider from "./context/EmployeeContext";

export const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Navbar />
      <Routes>
        <Route
          path="/employeelist"
          element={
            <EmployeeContextProvider>
              <EmployeeList />
            </EmployeeContextProvider>
          }
        ></Route>
        <Route path="/todo" element={<ToDo />}></Route>
        <Route path="/timer" element={<Timer />}></Route>
        <Route path="/maxcount" element={<MaxCount />}></Route>
        <Route path="/progressbar" element={<ProgressBar />}></Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
};

export default App;
