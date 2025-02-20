import styles from "./styles.module.css"

import Title from "../../Title"
import { ChildrenInterface } from "../../../types"
import ExpenseProvider from "../Context"

const ExpenseRoot = ({ children }: ChildrenInterface) => (
    <ExpenseProvider >
        <section className={styles.expense}>
            <Title>Expenses</Title>
            {children}
        </section>
    </ExpenseProvider>
)


export default ExpenseRoot