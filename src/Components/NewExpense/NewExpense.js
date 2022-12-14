import './NewExpense.css';
import './ExpenseForm';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const savedExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };


    return (<div className='new-expense'>
        <ExpenseForm onSaveExpenseData={savedExpenseDataHandler} />
    </div>
    );
};

export default NewExpense;