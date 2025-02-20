import { ChildrenInterface } from '../../types'
import styles from './styles.module.css'

const Title = ({ children }: ChildrenInterface) => (
    <h1 className={styles.title}>{children}</h1>
)

export default Title