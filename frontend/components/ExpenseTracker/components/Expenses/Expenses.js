import ExpenseItems from "./ExpenseItem";
import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFIlter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() == filteredYear;
  });

  return (
    <div>
      <Card className="mt-10 bg-[#232222] px-4 py-8 mx-auto max-w-[1000px] flex flex-col gap-4 ">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <div className="flex flex-col gap-4">
          {filteredExpenses.length === 0 && (
            <div className="text-center text-zinc-100 text-xl">
              No Expenses Found!😀
            </div>
          )}
          {filteredExpenses.length > 0 &&
            filteredExpenses.map((expense) => (
              <ExpenseItems text={expense} key={expense.id} />
            ))}
        </div>
      </Card>
    </div>
  );
};

export default Expenses;
