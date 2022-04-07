import React from "react";
import ExpenseItem from "./ExpenseItem";

function Expense(props) {
  const listItems = props.expense.map((expense) => (
    <ExpenseItem
      title={expense.title}
      date={expense.date}
      amount={expense.amount}
    />
  ));

  return <div>{listItems}</div>;
}

export default Expense;
