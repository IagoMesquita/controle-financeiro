import React, { useState } from "react";
import { uuid } from "../../utils/uuid";
import { ITransaction } from "../../interface/ITransaction";
import Grid from "../Grid";
import * as C from "./styles";

type Props = {
  handleAdd: (transaction: ITransaction) => void;
  transactions: ITransaction[];
  setTransaction: (transaction: ITransaction[]) => void;
};

function Form({ handleAdd, transactions, setTransaction }: Props) {
  const [desc, setDec] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  const [isDescriptionEmpty, setDescriptionValidation] = useState(false);
  const [isAmountEmpty, setAmountValidation] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      id: uuid(),
      desc,
      amount,
      isExpense,
    };

    setDescriptionValidation(false);
    setAmountValidation(false);


    if (data.desc === "" || data.amount === "") {

      data.desc === "" && setDescriptionValidation(true);
      data.amount === "" && setAmountValidation(true);

      return;

    }

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
          {isDescriptionEmpty && <span style={{ color: "red", fontSize: 10 }}>* Campo obrigatório!</span>}
        </C.InputContent>
        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input
            type="number"
            min={0}
            step="0.01"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
          {isAmountEmpty && <span style={{ color: "red", fontSize: 10 }}>* Campo obrigatório!</span>}
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
      <Grid itens={transactions} setItens={setTransaction} />
    </>
  );
}

export default Form;
