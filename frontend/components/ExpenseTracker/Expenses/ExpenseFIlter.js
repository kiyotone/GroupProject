import React from "react";

const ExpenseFilter = (props) => {
  const dropDownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="flex justify-between p-3">
      <label className="font-bold text-zinc-100 text-lg">Filter by year</label>
      <select
        value={props.selected}
        onChange={dropDownChangeHandler}
        className="rounded-lg py-2 px-8 font-bold"
      >
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2023">2024</option>
        <option value="2023">2025</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
