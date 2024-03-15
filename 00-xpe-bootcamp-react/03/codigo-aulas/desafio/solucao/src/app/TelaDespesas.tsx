import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ExibicaoTotal from "./ExibicaoTotal";
import SelecaoAnoMes from "./SelecaoAnoMes";
import TabelaDespesas from "./TabelaDespesas";
import TabelaResumo from "./TabelaResumo";
import useDespesas from "./useDespesas";

export default function TelaDespesas() {
  const params = useParams<{ anoMes: string }>();
  const anoMes = params.anoMes || "2021-01";
  const navigate = useNavigate();

  const { despesas, total, despesasCategoria } = useDespesas(anoMes);

  const [aba, setAba] = useState(0);

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
      <Tabs centered value={aba} onChange={(evt, novaAba) => setAba(novaAba)}>
        <Tab label="Resumo" />
        <Tab label="Detalhes" />
      </Tabs>
      {aba === 0 && <TabelaResumo despesasCategoria={despesasCategoria} />}
      {aba === 1 && <TabelaDespesas despesas={despesas} />}
    </div>
  );
}
