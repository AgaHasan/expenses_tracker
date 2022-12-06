import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Registracija",
      amount: 500,
      date: new Date(2022, 11, 11),
    },
    {
      id: "e2",
      title: "Registracija",
      amount: 550,
      date: new Date(2021, 11, 11),
    },
    {
      id: "e3",
      title: "Registracija",
      amount: 600,
      date: new Date(2020, 11, 11),
    },
    {
      id: "e4",
      title: "Registracija",
      amount: 700,
      date: new Date(2019, 11, 11),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
