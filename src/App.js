import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import React, {useState} from "react";

const initial_expenses = [
];

const App = () => {
  const [expenses,setExpenses] = useState(initial_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((oldExpenses) => {
      return [expense, ...oldExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;