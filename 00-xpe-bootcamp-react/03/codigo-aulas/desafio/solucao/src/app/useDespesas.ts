import { useEffect, useMemo, useState } from "react";
import { Despesa, carregaDespesas } from "./backend";

export interface DespesaCategoria {
  categoria: string;
  valor: number;
}

export default function useDespesas(anoMes: string) {
  const [despesas, setDespesas] = useState<Despesa[]>([]);

  useEffect(() => {
    carregaDespesas(anoMes).then((dados) => {
      setDespesas(dados);
    });
  }, [anoMes]);

  return useMemo(() => {
    const total = somaDespesas(despesas);
    const despesasCategoria = somaDespesasCategoria(despesas);

    return {
      despesas,
      total,
      despesasCategoria
    };
  }, [despesas]);
}

function somaDespesas(despesas: Despesa[]) {
  console.log("somaDespesas");
  let total = 0;
  for (let despesa of despesas) {
    total += despesa.valor;
  }
  return total;
}

function somaDespesasCategoria(despesas: Despesa[]) {
  console.log("somaDespesasCategoria");
  const despesasCategoria: DespesaCategoria[] = [];
  for (let despesa of despesas) {
    const e = despesasCategoria.find(e => e.categoria === despesa.categoria);
    if (e) {
      e.valor += despesa.valor;
    } else {
      despesasCategoria.push({ categoria: despesa.categoria, valor: despesa.valor });
    }
  }

  despesasCategoria.sort((v1, v2) => v2.valor - v1.valor);

  return despesasCategoria;
}