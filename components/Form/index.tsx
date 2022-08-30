import React, { ChangeEvent, useState } from 'react';
import * as C from './styles';


function Form() {
  const [desc, setDec] = useState('');
  const [amount, setAmount] = useState('');
  const [isExpense, setExpense] = useState(false);

  const handleSubmt = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("SAlva!!")
  }

  return (
    <C.Form onSubmit={ handleSubmt }>
      <C.InputContent>
        <C.Label>Descrição</C.Label>
        <C.Input 
          type="text"
          onChange={ (e) => setDec(e.target.value) }
          value={ desc }
        />
      </C.InputContent>
      <C.InputContent>
        <C.Label>Valor</C.Label>
        <C.Input 
          type="number"
          onChange={ (e) => setAmount(e.target.value) }
          value={ amount }
        />
      </C.InputContent>
      <C.RadioGroup>
        <C.Input
          type="radio"
          id="rIcome"
          defaultChecked
          name="group1"
          onChange={ () => setExpense(!isExpense) }
        />
        < C.Label htmlFor="rIcome">Entrada</ C.Label>
      </C.RadioGroup>
      <C.RadioGroup>
        <C.Input
          type="radio"
          id="rExpenses"
          name="group1"
          onChange={ () => setExpense(!isExpense) }
        />
        < C.Label htmlFor="rExpenses">Saída</ C.Label>
      </C.RadioGroup>
      <C.Button>ADICIONAR</C.Button>
    </C.Form>
  )
}

export default Form;