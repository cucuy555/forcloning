import React from "react";
import "./expenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2021, 4, 28);
  const expenseItem = "title";
  const expenseAmount = 265.85;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseItem}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
