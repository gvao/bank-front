import { createContext, useContext, useState } from "react";
import { ChildrenInterface, Expense } from "../../types";
import { expenses as initialExpenses } from "../../constants/expenses";

interface ExpenseContextInterface {
    expenses: Expense[]
    addExpense: (expense: Expense) => void
}

const InitialState: ExpenseContextInterface = {
    expenses: initialExpenses,
    addExpense: () => {}
}

const ExpenseContext = createContext<ExpenseContextInterface>(InitialState as ExpenseContextInterface)

export const useExpenseContext = () => useContext(ExpenseContext)

export default function ExpenseProvider({ children, ...rest }: Props) {
    const [expenses, setExpenses] = useState<Expense[]>(InitialState.expenses)

    const addExpense = (expense: Expense) => {
        setExpenses([...expenses, expense])
    }

    return (
        <ExpenseContext.Provider value={{ expenses, addExpense }} {...rest}>
            {children}
        </ExpenseContext.Provider>
    )
}

interface Props extends ChildrenInterface {
    className?: string
}
