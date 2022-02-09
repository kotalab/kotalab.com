import { NextPage } from 'next'
import Image from 'next/image'
import Experience from '../../Experience'
import Header from '../../Header'
import Heading from '../../Heading'
import SNSList from '../../SNSList'
import Text from '../../Text'
import { bio } from './data'
import styles from './Top.module.css'

export const Top: NextPage = () => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.title}>
                <Heading className={styles.title} HeadingType='h1'>
                    Tetsuya Kojima / こたら
                </Heading>
                <Text>
                    Software Engineer
                </Text>
            </div>
            <aside className={styles.aside}>
                <Image src="/images/profile.png" alt="Profile icon" width={100} height={100} quality={100} />
                <SNSList />
            </aside>
            <main className={styles.main}>
                <Heading HeadingType='h2'>
                    About me
                </Heading>
                <Text>
                    {bio}
                </Text>
            </main>
            <div className={styles.experience}>
                <Heading HeadingType='h2'>
                    Experience
                </Heading>
                <Experience />
            </div>
            <footer className={styles.footer}>
                <span>
                    © 2022 kotalab.com
                </span>
                <a
                    href='https://github.com/kotalab/kotalab.com/'
                    target='_blank'
                    rel="noopener noreferrer"
                >
                    Edit this page on GitHub
                </a>
            </footer>
        </div>
    )
}