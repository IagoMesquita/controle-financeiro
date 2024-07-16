import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";
// components
import Form from "../components/Form";
import Resume from "../components/Resume";
import { ITransaction } from "../interface/ITransaction";





const Home: NextPage<ITransaction> = ({dataDb}: any) => {


  const [transactions, setTransaction] = useState<ITransaction[]>([...dataDb]);


  const [entries, setEntries] = useState<number>(0);
  const [expenses, setExpenses] = useState<number>(0);
  const [balance, setBalance] = useState<number>(0);


  useEffect(() => {

    const sumOfEntries = transactions.filter((el) => el.type === "INCOME")
      .reduce((acc, el) => acc + Number(el.amount), 0)

    const sumOfExpenses = transactions.filter((el) => el.type === "EXPENSE")
      .reduce((acc, el) => acc + Number(el.amount), 0)

    const total = sumOfEntries - sumOfExpenses;

    setEntries(sumOfEntries);
    setExpenses(sumOfExpenses);
    setBalance(total);


  }, [transactions])

  const handleAdd = async (transaction: Omit<ITransaction, "id">) => {
    const response = await fetch("http://localhost:8080/transactions", {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        "title": transaction.title,
        "amount": Number(transaction.amount),
        "type": transaction.type ? "EXPENSE" : "INCOME"
      })
    });

    const newTransaction: ITransaction = await response.json();

    const newTransactions = [...transactions, newTransaction];

    setTransaction(newTransactions);

    localStorage.setItem('transactions', JSON.stringify(newTransactions));

  }

  return (
    <div>
      <Head>
        <title>Controle Financeiro</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Resume
        entries={entries}
        expenses={expenses}
        balance={balance}
      />
      <Form
        handleAdd={handleAdd}
        transactions={transactions}
        setTransaction={setTransaction}
      />
      
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:8080/transactions");
  const dataDb = await res.json();

  return {
    props: { dataDb },
  };
}

export default Home;
