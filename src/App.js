import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <h1>Let's get Started</h1>
      <ExpenseItem
        date={new Date(2023, 7, 15)}
        title="Insurance"
        price="50"
        location="Bangalore" // Adding location attribute
      ></ExpenseItem>
      <ExpenseItem
        date={new Date(2023, 3, 25)}
        title="Book"
        price="20"
        location="Delhi" // Adding location attribute
      ></ExpenseItem>
      <ExpenseItem
        date={new Date(2023, 10, 11)}
        title="Pen"
        price="5"
        location="Hyderabad" // Adding location attribute
      ></ExpenseItem>
      <ExpenseItem
        date={new Date(2023, 1, 14)}
        title="Laptop"
        price="200"
        location="Mumbai" // Adding location attribute
      ></ExpenseItem>
    </div>
  );
}

export default App;
