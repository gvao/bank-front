import { createContext } from "react";
import { ExpenseContextInterface } from "./interface";
import { expenses } from "../../../constants/expenses";

export const InitialState: ExpenseContextInterface = {
    expenses: expenses,
    addExpense: () => {}
}

export const ExpenseContext = createContext<ExpenseContextInterface>(InitialState as ExpenseContextInterface)