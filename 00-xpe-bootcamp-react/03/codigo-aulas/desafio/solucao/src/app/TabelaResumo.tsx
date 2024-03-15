import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { DespesaCategoria } from "./useDespesas";
import { formataValor } from "./util";

interface Props {
  despesasCategoria: DespesaCategoria[];
}

export default function TabelaResumo(props: Props) {
  return (
    <TableContainer>
      <Table aria-label="Tabela de despesas por categoria">
        <TableHead>
          <TableRow>
            <TableCell>Categoria</TableCell>
            <TableCell align="right">Valor (R$)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.despesasCategoria.map((item) => (
            <TableRow key={item.categoria}>
              <TableCell>{item.categoria}</TableCell>
              <TableCell align="right">{formataValor(item.valor)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
