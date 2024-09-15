import { useState } from "react"

export default function Alarm (){

    const [time, setTime] = useState(new Date().getTime());
    const [alarmTime, setAlarmTime] = useState();

    const checkTime = (){
        if(time===alarmTime){
            return(
                <div>
                    <h1>Hey, Your Alarm is On</h1>
                    <button>Close Alarm</button>
                </div>
            )
        }
    }

    return(
        <h2>Set up Alarm</h2>

    )
}