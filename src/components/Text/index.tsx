import styles from './Text.module.css'

const Text = ({ children, bold = false }) => (
    bold ?
        <p className={`${styles.text} ${styles.bold}`} >{children}</p>
        :
        <p className={styles.text} >{children}</p>
)

export default Text;