import { isMapIterator } from "util/types";
import GetItem from "../GridItem";
import { Container } from "../ResumeItem/styles";
import * as C from "./styles";

type Props = {
  itens: string[];
  setItens: () => void;
};

function Grid({itens, setItens}: Props) {

  const onDelete = (id) => {
    const newArray = intens.filter((intem) => intem.id !== id);
    setItens(newArray);
    localStorage.setItem('transaction', JSON.stringify(newArray));
  }

  return (
    <C.Table>
      {/* <C.Thead> */}
        <C.Tr>
            <C.Th width={40} alignCenter=''>Descrição</C.Th>
            <C.Th width={40} alignCenter=''>Valor</C.Th>
            <C.Th width={10} alignCenter='true'>Tipo</C.Th>
            <C.Th width={10} alignCenter=''></C.Th>
        </C.Tr>
      {/* </C.Thead> */}
      {/* <C.Tbody> */}
        {
          itens.map((item, index) => (
            <GetItem  key={ index } item={item} onDelete={ onDelete }/>
          ))
        }
      {/* </C.Tbody> */}
    </C.Table>
  );
}

export default Grid;
