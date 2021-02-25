import { ExperienceBar } from '../components/ExperienceBar/ExperienceBar';
import { Profile } from '../components/Profile/Profile'
import { CompletedChallenges } from '../components/CompletedChallenges/CompletedChallenges';
import { ChallengeBox } from '../components/ChallengeBox/ChallengeBox'
import styles from '../pages/Home.module.css';
import { Countdown } from '../components/Countdown/Countdown';

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />
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
    </div>
  )
}
