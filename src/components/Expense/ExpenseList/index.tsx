import styles from './styles.module.css'

import ExpenseItem from "../ExpenseItem";
import { useExpenseContext } from '../Context';

export default function ExpenseList() {
    const { expenses } = useExpenseContext()
    return (
        <ul className={styles.expenseList}>
            {expenses.map(expense => (
                <ExpenseItem key={expense.title} expense={expense} />
            ))}
        </ul>
    )
}