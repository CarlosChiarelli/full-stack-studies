import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import TelaDespesas from "./TelaDespesas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/despesas/:anoMes" element={<TelaDespesas />} />
        <Route path="/" element={<Navigate to="/despesas/2021-01" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
