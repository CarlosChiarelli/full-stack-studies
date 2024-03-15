export interface Despesa {
  id: number;
  descricao: string;
  categoria: string;
  valor: number;
  mes: string;
  dia: string;
}

export interface Usuario {
  email: string;
  nome: string;
}

export function obtemUsuario(): Promise<Usuario> {
  return fetch(`http://localhost:3001/sessao/usuario`, {
    credentials: "include"
  })
    .then(trataResposta);
}

export function criaSessao(email: string, senha: string): Promise<Usuario> {
  return fetch(`http://localhost:3001/sessao/criar`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({ email, senha }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(trataResposta);
}

export function finalizaSessao(): Promise<void> {
  return fetch(`http://localhost:3001/sessao/finalizar`, {
    method: "POST",
    credentials: "include"
  })
    .then(trataResposta);
}

export function carregaDespesas(anoMes: string): Promise<Despesa[]> {
  return fetch(`http://localhost:3001/despesas?mes=${anoMes}&_sort=dia`, {
    credentials: "include"
  })
    .then(trataResposta);
}

function trataResposta(response: Response) {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Erro ao carregar dados.");
  }
}