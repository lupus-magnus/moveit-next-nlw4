import { ExperienceBar } from '../components/ExperienceBar/ExperienceBar';
import { Profile } from '../components/Profile/Profile'
import { CompletedChallenges } from '../components/CompletedChallenges/CompletedChallenges';
import { ChallengeBox } from '../components/ChallengeBox/ChallengeBox'
import styles from '../pages/Home.module.css';
import { Countdown } from '../components/Countdown/Countdown';
import { CountdownProvider } from '../contexts/CountdownContext';

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />
      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}
