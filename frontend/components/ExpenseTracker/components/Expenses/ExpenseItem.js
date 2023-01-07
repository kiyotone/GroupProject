import ExpenseDate from "./ExpenseDate";
import React, { useState } from "react";
import Card from "../UI/Card";

const ExpenseItems = (props) => {
  return (
    <Card className="flex gap-5 bg-[#414141] items-center py-2 px-3">
      <ExpenseDate date={props.text.date} />
      <div className="flex flex-grow ml-5 relative justify-between">
        <h2 className="text-zinc-200 font-bold text-2xl self-center">
          {props.text.title}
        </h2>
        <div className=" bg-[#360052] text-zinc-200 font-bold rounded-xl py-4 px-10 mr-9  text-2xl">
          ${props.text.amount}
        </div>
      </div>
    </Card>
  );
};

export default ExpenseItems;
