import styles from './Experience.module.css';
import Text from '../Text'
import { experiences } from './data';

const Experience = () => {
    return (
        <div className={styles.wrapper}>
            {experiences.map(experience => (
                <div className={styles.experience} key={experience.company}>
                    <div className={styles.period}>
                        {experience.roles.map((role) => (
                            <div key={role.title} className={styles.term}>
                                <Text>{role.title != experience.roles[0].title ? '' : role.end || 'Now'}</Text>
                                <p className={styles.hyphen}>-</p>
                                <Text>{role.start}</Text>
                            </div>
                        ))}
                    </div>
                    <div className={styles.dot}></div>
                    <div className={styles.detail}>
                        <Text bold>{experience.company}</Text>
                        {experience.roles.map((role, index) => (
                            <Text key={index}>{role.title}</Text>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Experience;