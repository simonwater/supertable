import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import DataGrid from "./components/data-grid";
import "./App.css";

function App() {
  return (
    <main style={{ width: "100%", height: "100vh" }} className="container">
      <DataGrid />
    </main>
  );
}

export default App;
