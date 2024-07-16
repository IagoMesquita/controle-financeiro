import * as C from "./styles";

import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

import { ITransaction } from "../../interface/ITransaction";
import formatCurrency from "../../utils/ formatCurrency";

type Props = {
  item: ITransaction;
  onDelete: (id: string) => void;
};

function GetItem({ item, onDelete }: Props) {
  return (
    <C.Tr>
      <C.Td>{item.title}</C.Td>
      <C.Td>
        {formatCurrency(Number(item.amount))}
      </C.Td>
      <C.Td alignCenter="true">
        {item.type === "EXPENSE" ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </C.Td>
      <C.Td alignCenter="true">
        <FaTrash onClick={() => onDelete(item.id)} />
      </C.Td>
    </C.Tr>
  );
}

export default GetItem;
