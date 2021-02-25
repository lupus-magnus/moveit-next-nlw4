import styles from './Profile.module.css';

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/lupus-magnus.png" />
            <div>
                <strong>Matheus Cardoso</strong>
                <p> <img src="icons/level.svg" alt=""/>
                Level 3
                </p>
            </div>
        </div>
    )
}