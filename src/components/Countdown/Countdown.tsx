import { useEffect, useState } from 'react';
import styles from './Countdown.module.css';

export function Countdown(){
    //States
    const [time, setTime] = useState(10); //25 * 60 Segundos
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);
    //Hooks
    
    let ourTimer : NodeJS.Timeout; //Para contornar a questão de desativar o timer, damos um jeito de dar nome a ele.
    useEffect(() => {
        if(isActive && time > 0){
            ourTimer = setTimeout(()=>{setTime(time-1)},1000)
        } else if(isActive && time === 0){
            setHasFinished(true);
            setIsActive(false);
        }

    }, [isActive, time])

    const minutes = Math.floor(time/60);
    const seconds = time % 60;

    //Esse padStart serve para preencher com valores os chars da frente padStart(quantosAlgsTemQueTer, qualValorPadrao)
    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');

    function startCountdown(){
        setIsActive(true);
    }

    function resetCountdown(){
        clearTimeout(ourTimer);
        setIsActive(false);
        setTime(25*60)
        
    }

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