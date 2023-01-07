import React, { useState } from "react";
import Expenses from "../components/ExpenseTracker/Expenses/Expenses";
import NewExpense from "../components/ExpenseTracker/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  // {
  //   id: "e1",
  //   title: "Car Insurance",
  //   amount: 256,
  //   date: new Date(2022, 11, 15),
  // },
  // {
  //   id: "e2",
  //   title: "Food",
  //   amount: 150,
  //   date: new Date(2023, 01, 02),
  // },
  // {
  //   id: "e1",
  //   title: "Mortage",
  //   amount: 1500,
  //   date: new Date(2021, 09, 30),
  // },
  // {
  //   id: "e1",
  //   title: "Car Insurance",
  //   amount: 256,
  //   date: new Date(2022, 11, 15),
  // },
  // {
  //   id: "e1",
  //   title: "Car Insurance",
  //   amount: 256,
  //   date: new Date(2022, 11, 15),
  // },
  // {
  //   id: "e1",
  //   title: "Car Insurance",
  //   amount: 256,
  //   date: new Date(2022, 11, 15),
  // },
];

function App() {
  const [datas, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="bg-[#383838]  p-10 min-h-screen ">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={datas} />
    </div>
  );
}

export default App;
