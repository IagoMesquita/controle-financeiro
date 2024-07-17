import React, { ChangeEvent, useState } from "react";
import * as C from "./styles";
import { ITransaction } from "../../interface/ITransaction";

type Props = {
  filterItens: (transaction: ITransaction[]) => void;
};

function FormFilter({ filterItens }: Props) {

  const [selectType, setSelectType] = useState<string>();
  const [error, setError] = useState(false);

  const handleSelectType = (event: ChangeEvent<HTMLSelectElement>): void => {
    setSelectType(event.target.value)

  }

  const onSubmitFilter = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("onSubmitFilter");

    // if(selectType === "") return;

    try {
      const res = await fetch(`http://localhost:8080/transactions?type=${selectType}`);

      if (!res.ok) {
        throw new Error(`Falha ao fazer o filtro: ${res.statusText}`)
      }

      const transactionsDbFiltered = await res.json();
      setError(false)
      console.log("Fitrado", transactionsDbFiltered)
      filterItens(transactionsDbFiltered);

    } catch (error) {
      console.error(error);
      setError(true)
    }
  };

  return (
    <>
      <C.Form onSubmit={onSubmitFilter}>
        {error && <span style={{color:"red"}}>Houve um erro no filtro!</span>}
        <C.InputContent>
          <C.Label>Buscar por:</C.Label>
          <C.Select  value={selectType} onChange={handleSelectType} >
            <option value="" defaultChecked>Todos</option>
            <option value={"INCOME"}>Entradas</option>
            <option value={"EXPENSE"}>Saidas</option>
          </C.Select >
        </C.InputContent>
        <C.InputContent>
          <C.Label>Periodo</C.Label>
          <C.Select>
            <option value="">Todos</option>
            <option value={new Date().getFullYear()}>Ano</option>
            <option value={new Date().getMonth()}>Mes</option>
            <option value={new Date().getDay()}>Dia</option>
          </C.Select>
        </C.InputContent>
        {/* <C.RadioGroup>
          <C.Input
            type="radio"
            id="rYear"
            defaultChecked
            name="filtro"
          
          />
          <C.Label htmlFor="rYear">Ano Vigente</C.Label>
        </C.RadioGroup>
        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rMonth"
            name="filtro"
   
          />
          <C.Label htmlFor="rMonth">Mes Vigente </C.Label>
        </C.RadioGroup>
        <C.RadioGroup>
        <C.Input
            type="radio"
            id="rDay"
            defaultChecked
            name="filtro"
          
          />
          <C.Label htmlFor="rDay">Dia</C.Label>
        </C.RadioGroup> */}

        <C.Button>
          <C.Text>Filtrar</C.Text>
          <C.Icon />
        </C.Button>
      </C.Form>
    </>
  );
}

export default FormFilter;
