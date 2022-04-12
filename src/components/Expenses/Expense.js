import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filteredExpenses = props.expense.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // const newData = (expense) => {
  //   filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       date={expense.date}
  //       amount={expense.amount}
  //     />
  //   ));
  // };

  return (
    <div>
      <div>
        <ExpensesFilter
          defaultYear={filteredYear}
          yearPassedToExpenses={filteredChangeHandler}
        />
      </div>
      <ExpensesList items={filteredExpenses} />
      {/* {filteredExpenses.length === 0 && <p>No expenses found</p>}
      {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))
      )} */}
    </div>
  );
}

export default Expense;
