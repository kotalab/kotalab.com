import Styles from './Experience.module.css';
import Text from '../Text'
import { experiences } from './data';

const Experience = () => {
    return (
        <div className={Styles.wrapper}>
            {experiences.map(experience => (
                <div className={Styles.item}>
                    <div className={Styles.period}>
                        {experience.roles.map(role => (
                            <>
                                <Text>{role.title != experience.roles[0].title ? '' : role.end || 'Now'}</Text>
                                <p className={Styles.hyphen}>-</p>
                                <Text>{role.start}</Text>
                            </>
                        ))}
                    </div>
                    <div className={Styles.dot}></div>
                    <div className={Styles.detail}>
                        <Text bold>{experience.company}</Text>
                        {experience.roles.map(role => (
                            <Text>{role.title}</Text>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Experience;