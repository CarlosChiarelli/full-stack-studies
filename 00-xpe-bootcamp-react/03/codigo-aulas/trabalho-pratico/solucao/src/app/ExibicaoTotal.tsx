import { formataValor } from "./util";

export default function ExibicaoTotal(props: { total: number }) {
  return (
    <div>
      Valor total: <strong>R$ {formataValor(props.total)}</strong>
    </div>
  );
}
