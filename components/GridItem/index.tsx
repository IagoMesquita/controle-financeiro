import * as C from "./styles";

import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";
import { ITransaction } from "../../interface/ITransaction";

type Props = {
  item: ITransaction;
  onDelete: (id: number) => void;
};

function GetItem({item, onDelete}: Props) {
  return (
    <C.Tr>
        <C.Td >{item.desc}</C.Td>
        <C.Td >{item.amount}</C.Td>
        <C.Td alignCenter='true'>
            {
                item.isExpense ? (
                    <FaRegArrowAltCircleDown color="red"/>
                ): (
                    <FaRegArrowAltCircleUp color="green"/>
                )
            }
        </C.Td>
        <C.Td alignCenter='true'>
            <FaTrash onClick={ () => onDelete(item.id) }/>
        </C.Td>
    </C.Tr>
  );
}

export default GetItem;
