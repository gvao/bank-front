import styles from './styles.module.css'
import { Expense } from '../../../types/Expense'

export default function ExpenseItem({ expense }: { expense: Expense }) {

    const date = new Intl.DateTimeFormat('pt-BR').format(expense.date)

    return (
        <li className={styles.expenseItem}>
            <span>{date}</span>
            <div className={styles.info}>
                <h3>{expense.title}</h3>
                <p>{expense.type}</p>
            </div>
            <div className={styles.mount}>
                <span>R$ {expense.mount.toFixed(2)}</span>
                <span>{expense.credit ? '+ crédito' : '- debito'}</span>
            </div>
        </li>
    )
}