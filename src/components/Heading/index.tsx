import { ReactNode } from 'react';
import styles from './Heading.module.css';

type Props = {
    children: ReactNode
    HeadingType?: 'h1' | 'h2'
}

const getClassName = (type: string) => {
    switch (type) {
        case 'h1':
            return styles.h1
        case 'h2':
            return styles.h2
        default:
            return null
    }
}
const Heading: React.FCX<Props> = ({ children, HeadingType = 'h1' }) => (
    <HeadingType className={getClassName(HeadingType)} >{children}</HeadingType>
)

export default Heading