import { useEffect, useState } from "react"

export default function Alarm (){

    const [time, setTime] = useState(new Date().getTime());
    const [alarmTime, setAlarmTime] = useState();

    const checkAlarm = () => {
        const currentTime = String(time).slice(0,5);
        console.log(currentTime);
        if(time===alarmTime){
            return(
                <div>
                    <h1>Hey, Your Alarm is On</h1>
                    <button>Close Alarm</button>
                </div>
            )
        }
    }

    useEffect(()=>{
        const timerId = setInterval(()=>{
            setTime(new Date().getTime());
        },1000)

        return () => clearInterval(timerId);
    },[])


    

    return(
        <div>
            <h2>Set up Alarm</h2>
            <input type="time" value={alarmTime} onChange={(e)=> {setAlarmTime(e.target.value); checkAlarm()}}/>
            {checkAlarm}
            <button >Save Alarm</button>
            {console.log(alarmTime, time)}
        </div> 
    )
}