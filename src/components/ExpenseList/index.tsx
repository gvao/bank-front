import styles from './styles.module.css'

import ExpenseItem from "../ExpenseItem";
import { Expense } from '../ExpenseItem/types';

export default function ExpenseList({ expenses }: { expenses: Expense[] }) {
    return (
        <ul className={styles.expenseList}>
            {expenses.map(expense => (
                <ExpenseItem key={expense.title} expense={expense} />
            ))}
        </ul>
    )
}