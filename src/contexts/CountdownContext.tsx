import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
    minutes: number;
    seconds: number; 
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}

interface CountdownProviderProps{
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData)

export function CountdownProvider( { children }: CountdownProviderProps){
    const { startNewChallenge } = useContext(ChallengesContext);
    
    
    
    const [time, setTime] = useState(5); //25 * 60 Segundos
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);
    
    const minutes = Math.floor(time/60);
    const seconds = time % 60;


    function startCountdown(){
        setIsActive(true);
    }

    function resetCountdown(){
        clearTimeout(ourTimer);
        setIsActive(false);
        setTime(5);
        setHasFinished(false);
        
    }
    
    let ourTimer : NodeJS.Timeout; //Para contornar a questão de desativar o timer, damos um jeito de dar nome a ele.
    
    useEffect(() => {
        if(isActive && time > 0){
            ourTimer = setTimeout(()=>{setTime(time-1)},1000)
        } else if(isActive && time === 0){
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }

    }, [isActive, time])
    
    return(
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown,
        }}>
            {children}
        </CountdownContext.Provider>
    )
}