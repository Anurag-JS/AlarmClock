import { useEffect, useState } from "react"

export default function Alarm (){

    //const [time, setTime] = useState(new Date());
    const [alarmTime, setAlarmTime] = useState("");
    const [alarmActive, setAlarmActive] = useState(false);
    const [alarmSaved, setAlarmSaved] = useState(false)

    const handleInputChange= (e)=>{
        setAlarmTime(e.target.value)
    }

    const resetAlarm = () => {
        setAlarmTime("");
        setAlarmActive(false);
    }
    
    useEffect(()=>{
        const timerId = setInterval(()=>{
            const currentTime = new Date().toTimeString().slice(0,5);
           // setTime(new Date());
            if(currentTime===alarmTime){
                console.log(currentTime,alarmTime+"reached")
                setAlarmActive(true);
            }
        },1000)
        return () => clearInterval(timerId);
    },[alarmTime])

    const saveAlarm = () => {
        setAlarmTime(alarmTime);
        setAlarmSaved(true);
    }


    

    return(
        !alarmActive ? 
            (
                <div className="alarmbox">
                <h2>Set up Alarm</h2>
                <input type="time" value={alarmTime} onChange={handleInputChange} /> 
                <button onClick={saveAlarm}><strong>Save Alarm</strong></button>  
                {alarmSaved && <h3>Alarm Saved for {alarmTime}</h3>}
                </div> 
            )
            :
            (
                <div className="alarmOnBox">
                    <h1>Hey, Your Alarm is On</h1>
                    <button onClick={resetAlarm}>Close Alarm</button>
                </div>
            ) 
    )
}