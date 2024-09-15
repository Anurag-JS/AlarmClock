import { useEffect, useState } from "react"

export default function Alarm (){

    const [time, setTime] = useState(new Date());
    const [alarmTime, setAlarmTime] = useState("");

    const checkAlarm = () => {
        const currentTime = time.toTimeString().slice(0,5);
        if(currentTime===alarmTime){
            return(
                <div>
                    <h1>Hey, Your Alarm is On</h1>
                    <button>Close Alarm</button>
                </div>
            )
        }
    }

    const handleInputChange= (e)=>{
        setAlarmTime(e.target.value)
    }

 
    
    useEffect(()=>{
        const timerId = setInterval(()=>{
            setTime(new Date());
        },1000)

        return () => clearInterval(timerId);
    },[])

    const demo = () => {
        // setTime(time.toLocaleString("en-In",{
        //     hour: "2-digit",
        //     minute : "2-digit"
        // }))
        setAlarmTime(alarmTime)
        const input = alarmTime;
        const curr = time;
        console.log(`input = ${input}, ${typeof input}|||  current ${curr}, ${typeof curr}`);

    }


    

    return(
        <div>
            <h2>Set up Alarm</h2>
            <input type="time" value={alarmTime} onChange={handleInputChange} /> 
            {checkAlarm()}
            <button onClick={demo}>Save Alarm</button>
            
        </div> 
    )
}