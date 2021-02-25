import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from './Profile.module.css';

export function Profile(){
    const { level } = useContext(ChallengesContext)

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/lupus-magnus.png" />
            <div>
                <strong>Matheus Cardoso</strong>
                <p> <img src="icons/level.svg" alt=""/>
                Level {level}
                </p>
            </div>
        </div>
    )
}