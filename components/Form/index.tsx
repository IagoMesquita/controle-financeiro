import React, { useState } from "react";
// import { uuid } from "../../utils/uuid";
import { ITransaction } from "../../interface/ITransaction";
import Grid from "../Grid";
import * as C from "./styles";
import FormFilter from "../FormFilter";

type addTransaction = Omit<ITransaction, 'id'>

type Props = {
  handleAdd: (transaction: addTransaction) => void;
  transactions: ITransaction[];
  setTransaction: (transaction: ITransaction[]) => void;
};

function Form({ handleAdd, transactions, setTransaction }: Props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("INCOME");

  const [isTitleEmpty, setTitleValidation] = useState(false);
  const [isAmountEmpty, setAmountValidation] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      title,
      amount,
      type,
    };

    setTitleValidation(false);
    setAmountValidation(false);


    if (data.title === "" || data.amount === "") {

      data.title === "" && setTitleValidation(true);
      data.amount === "" && setAmountValidation(true);

      return;

    }

    handleAdd(data);

    setTitle("");
    setAmount("");
  };

  return (
    <>
      <C.Form onSubmit={handleSubmit}>
        <C.InputContent>
          <C.Label>Titulo</C.Label>
          <C.Input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          {isTitleEmpty && <span style={{ color: "red", fontSize: 10 }}>* Campo obrigatório!</span>}
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
            onChange={() => setType("INCOME")}
          />
          <C.Label htmlFor="rIcome">Entrada</C.Label>
        </C.RadioGroup>
        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setType("EXPENSE")}
          />
          <C.Label htmlFor="rExpenses">Saída</C.Label>
        </C.RadioGroup>
        <C.Button>
        <C.Text>ADICIONAR</C.Text>
        <C.Icon/>
        </C.Button>
      </C.Form>
      <FormFilter filterItens={setTransaction}/>
      <Grid itens={transactions} setItens={setTransaction} />
    </>
  );
}

export default Form;
