import { snsLists } from './data'
import styles from './SNSList.module.css'
import Facebook from '../../assets/svg/facebook.svg'
import Github from '../../assets/svg/github.svg'
import Twitter from '../../assets/svg/twitter.svg'
import Mail from '../../assets/svg/mail.svg'
import Wantedly from '../../assets/svg/wantedly.svg'

const svg = (title: string) => {
    switch (title) {
        case 'twitter':
            return <Twitter />
        case 'github':
            return <Github />
        case 'facebook':
            return <Facebook />
        case 'wantedly':
            return <Wantedly />
        case 'mail':
            return <Mail />
        default:
            return <Facebook />
    }
}

const SNSList = () => (
    <ul className={styles.list}>
        {snsLists.map(item => (
            <li key={item.title}>
                <a
                    href={item.link}
                    target='_blank'
                    rel="noopener noreferrer"
                >
                    {svg(item.title)}
                    <span>{item.name}</span>
                </a>
            </li>
        ))}
    </ul>
)

export default SNSList