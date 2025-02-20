import { useContext } from "react";
import { ExpenseContext } from ".";

export const useExpenseContext = () => useContext(ExpenseContext)
