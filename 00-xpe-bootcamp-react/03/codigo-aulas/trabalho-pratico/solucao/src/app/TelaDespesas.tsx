import Box from "@material-ui/core/Box";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ExibicaoTotal from "./ExibicaoTotal";
import SelecaoAnoMes from "./SelecaoAnoMes";
import TabelaDespesas from "./TabelaDespesas";
import { Despesa, carregaDespesas } from "./backend";

export default function TelaDespesas() {
  const params = useParams<{ anoMes: string }>();
  const anoMes = params.anoMes || "2021-01";
  const [despesas, setDespesas] = useState<Despesa[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    carregaDespesas(anoMes).then((dados) => {
      setDespesas(dados);
    });
  }, [anoMes]);

  const total = somaDespesas(despesas);

  function mudaRota(novoAnoMes: string) {
    navigate(`/despesas/${novoAnoMes}`);
  }

  return (
    <div>
      <Box display="flex" padding="1rem">
        <Box flex="1">
          <SelecaoAnoMes anoMes={anoMes} onChangeAnoMes={mudaRota} />
        </Box>
        <ExibicaoTotal total={total} />
      </Box>
      <TabelaDespesas despesas={despesas} />
    </div>
  );
}

function somaDespesas(despesas: Despesa[]) {
  let total = 0;
  for (let despesa of despesas) {
    total += despesa.valor;
  }
  return total;
}
