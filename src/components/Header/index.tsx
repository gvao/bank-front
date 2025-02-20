import Title from '../Title'
import styles from './styles.module.css'

const Header = () => (
    <header className={styles.header}>
        <Title>bank</Title>
        <button>Login</button>
    </header>
)

export default Header