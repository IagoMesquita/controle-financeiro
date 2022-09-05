import React from "react";
import ResumeItem from "../ResumeItem";
import * as C from "./styles";

import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

type BalanceProps = {
  entries: number;
  expenses: number;
  balance: number;
};

function Resume({ entries, expenses, balance}: BalanceProps) {
  return (
    <C.Container>
      <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={entries}/>
      <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={expenses}/>
      <ResumeItem title="Total" Icon={FaDollarSign} value={balance}/>
    </C.Container>
  );
}

export default Resume;
