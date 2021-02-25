import { useEffect, useState, useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';
import styles from './Countdown.module.css';

export function Countdown(){

    const { minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        resetCountdown, 
        startCountdown
    } = useContext(CountdownContext)

    //Esse padStart serve para preencher com valores os chars da frente padStart(quantosAlgsTemQueTer, qualValorPadrao)
    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');

    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                    
                <span>:</span>
                
                <div>    
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
                
                
            </div>
            { hasFinished ? (
                <button 
                disabled 
                className={styles.countdownButton}
                >
                Ciclo encerrado!
                </button>
            ) : ( 
            <>
                {isActive ? (
                    <button 
                    type='button' 
                    className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                    onClick={resetCountdown}
                    >
                    Abandonar ciclo!
                    </button>
                ) : (
                    <button 
                    type='button' 
                    className={styles.countdownButton}
                    onClick={startCountdown}
                    >
                    Iniciar ciclo!
                    </button>
                )}
            </>



            )
            
            }
            
            
        </div>
        
    )
}