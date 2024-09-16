import { useEffect, useState } from "react"

export default function Alarm (){

    const [time, setTime] = useState(new Date());
    const [alarmTime, setAlarmTime] = useState("");
    const [alarmActive, setAlarmActive] = useState(false);

    const handleInputChange= (e)=>{
        setAlarmTime(e.target.value)
    }

    const resetAlarm = () => {
        setAlarmTime("");
        setAlarmActive(false);
    }
    
    useEffect(()=>{
        const timerId = setInterval(()=>{
            setTime(new Date());
            const currentTime = time.toTimeString().slice(0,5);
            if(currentTime===alarmTime){
                console.log(currentTime,alarmTime+"reached")
                setAlarmActive(true);
            }
        },1000)
        return () => clearInterval(timerId);
    },[])

    const saveAlarm = () => {
        setAlarmTime(alarmTime);
    }


    

    return(
        !alarmActive ? 
            (
                <div className="alarmbox">
                <h2>Set up Alarm</h2>
                <input type="time" value={alarmTime} onChange={handleInputChange} /> 
                <button onClick={saveAlarm}><strong>Save Alarm</strong></button>  
                </div> 
            )
            :
            (
                <div>
                    <h1>Hey, Your Alarm is On</h1>
                    <button onClick={resetAlarm}>Close Alarm</button>
                </div>
            ) 
    )
}