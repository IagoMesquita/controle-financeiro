import React, { useState } from "react";
import { ITransaction } from "../../interface/ITransaction";
import Grid from "../Grid";
import * as C from "./styles";

type Props = {
  handleAdd: (transaction: ITransaction) => void;
  transactions: ITransaction[];
  setTransaction: () => void;
};

function Form({ handleAdd, transactions, setTransaction }: Props) {
  const [desc, setDec] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      desc,
      amount,
      isExpense,
    };

    handleAdd(data);

    setDec("");
    setAmount("");
  };

  return (
    <>
      <C.Form onSubmit={handleSubmit}>
        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.Input
            type="text"
            onChange={(e) => setDec(e.target.value)}
            value={desc}
          />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </C.InputContent>
        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rIcome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rIcome">Entrada</C.Label>
        </C.RadioGroup>
        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rExpenses">Saída</C.Label>
        </C.RadioGroup>
        <C.Button>ADICIONAR</C.Button>
      </C.Form>
      <Grid itens={transactions} setItens={transactions} />
    </>
  );
}

export default Form;
