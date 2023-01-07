import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: Number(enteredAmount),
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);

    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="font-bold">Title</label>
          <input
            className="rounded-md p-1"
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>

        <div className="flex flex-col">
          <label className="font-bold">Amount</label>
          <input
            className="rounded-md p-1"
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>

        <div className="flex flex-col">
          <label className="font-bold">Date</label>
          <input
            className="rounded-md p-1"
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>

      <div className="flex flex-grow justify-end mt-8">
        <button
          className="bg-[#360052] text-[#dec1ed] p-4 rounded-lg"
          type="submit"
        >
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
