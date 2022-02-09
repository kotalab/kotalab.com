import { snsLists } from './data'
import styles from './SNSList.module.css'

const SNSList = () => (
    <ul className={styles.list}>
        {snsLists.map(item => (
            <li key={item.title}>
                <a
                    href={item.link}
                    target='_blank'
                    rel="noopener noreferrer"
                >
                    <picture>
                        <source srcSet={`/images/${item.title}-dark.svg`} media='(prefers-color-scheme:dark)' />
                        <img src={`/images/${item.title}-lignt.svg`} width={30} height={30} />
                        <span>{item.name}</span>
                    </picture>
                </a>
            </li>
        ))}
    </ul>
)

export default SNSList