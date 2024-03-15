import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useState } from "react";
import { Usuario, criaSessao } from "./backend";
import Alert from "@mui/material/Alert";

interface Props {
  onLogin: (usuario: Usuario) => void;
}

export default function TelaLogin(props: Props) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  return (
    <Container>
      <h1>Despesas</h1>
      <p>Digite e-mail e senha para entrar.</p>
      <form onSubmit={onSubmit}>
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          label="E-mail"
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
        />
        <TextField
          type="password"
          fullWidth
          margin="normal"
          variant="outlined"
          label="Senha"
          value={senha}
          onChange={(evt) => setSenha(evt.target.value)}
        />
        <Box textAlign="right" padding="1rem 0">
          <Button type="submit" variant="contained" color="primary">
            Entrar
          </Button>
        </Box>
        {erro && <Alert severity="error">{erro}</Alert>}
      </form>
    </Container>
  );

  function onSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    setErro("");
    criaSessao(email, senha).then(props.onLogin, () =>
      setErro("E-mail ou senha incorretos.")
    );
  }
}
