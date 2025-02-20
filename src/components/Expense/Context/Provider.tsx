import { useState } from "react";
import { ChildrenInterface, Expense } from "../../../types";
import { ExpenseContext, InitialState } from ".";

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
