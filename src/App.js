import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./pages/Books";
import Add from "./pages/Add";
import Update from "./pages/Update";
import "./style.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books></Books>}></Route>
          <Route path="/add" element={<Add></Add>}></Route>
          <Route path="/update" element={<Update></Update>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
