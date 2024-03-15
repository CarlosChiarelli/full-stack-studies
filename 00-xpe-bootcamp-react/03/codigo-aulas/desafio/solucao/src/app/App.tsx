import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import TelaDespesas from "./TelaDespesas";
import TelaLogin from "./TelaLogin";
import { Usuario, finalizaSessao, obtemUsuario } from "./backend";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function App() {
  const [usuario, setUsuario] = useState<Usuario | "carregando" | "deslogado">(
    "carregando"
  );

  useEffect(() => {
    obtemUsuario().then(
      (usuario) => setUsuario(usuario),
      () => setUsuario("deslogado")
    );
  }, []);

  if (usuario === "carregando") {
    return <Box padding="1rem">Carregando...</Box>;
  } else if (usuario === "deslogado") {
    return <TelaLogin onLogin={(usuario) => setUsuario(usuario)} />;
  } else {
    return (
      <BrowserRouter>
        <Box display="flex" padding="1rem">
          <Box flex="1"></Box>
          <Box>
            Olá {usuario.nome}{" "}
            <Button type="button" variant="outlined" onClick={sair}>
              Sair
            </Button>{" "}
          </Box>
        </Box>
        <Routes>
          <Route path="/despesas/:anoMes" element={<TelaDespesas />} />
          <Route path="/" element={<Navigate to="/despesas/2021-01" />} />
        </Routes>
      </BrowserRouter>
    );
  }

  function sair() {
    finalizaSessao().then(() => setUsuario("deslogado"));
  }
}

export default App;
