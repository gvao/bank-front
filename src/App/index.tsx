import Expense from '../components/Expense'
import Header from '../components/Header'
import styles from './styles.module.css'

function App() {
  return (
    <>
      <Header />
      <main className={styles.app}>
        <Expense.Root>
          <Expense.List />
        </Expense.Root>
      </main>
    </>
  )
}


export default App