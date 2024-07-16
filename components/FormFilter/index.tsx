import React, { useState } from "react";
import * as C from "./styles";

type Props = {

};

function Form() {
  
  return (
    <>
      <C.Form>
        <C.InputContent>
          <C.Label>Buscar por:</C.Label>
          <C.Select >
            <option>Todos</option>
            <option value={"INCOME"}>Entradas</option>
            <option value={"EXPENSE"}>Saidas</option>
            </C.Select >
        </C.InputContent>
        <C.InputContent>
          <C.Label>Periodo</C.Label>
          <C.Select>
            <option>Todos</option>
            <option>Ano</option>
            <option>Mes</option>
            <option>Dia</option>
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
        <C.Icon/>
        </C.Button>
      </C.Form>
    </>
  );
}

export default Form;
