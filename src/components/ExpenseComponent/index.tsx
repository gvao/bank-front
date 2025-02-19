import { expenses } from "../../constants/expenses"
import ExpenseList from "../ExpenseList"
import styles from "./styles.module.css"

const ExpenseComponent = () => (
    <section className={styles.expenseComponent}>
        <h1>Expenses</h1>
        {/* <ExpenseForm /> */}
        <ExpenseList expenses={expenses} />
    </section>
)

// const ExpenseForm = () => (
//     <form>
//         <input type="text" placeholder="Enter expense" />
//         <input type="number" placeholder="Enter amount" />
//         <button>Add</button>
//     </form>
// )

export default ExpenseComponent