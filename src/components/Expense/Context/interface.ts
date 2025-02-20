import { Expense } from "../../../types"

export interface ExpenseContextInterface {
    expenses: Expense[]
    addExpense: (expense: Expense) => void
}