import {useState, useEffect} from 'react';
import { LightSensor } from 'expo-sensors';

export default function useLight(){
    const [available, setAvailable] = useState(false);
    const [light, setLight] = useState(0);

    useEffect(() => {
        let subscription;
        const subscribe = async () => {
            let isAvailable = await LightSensor.isAvailableAsync();
            setAvailable(isAvailable);
            if (!isAvailable) return;
            LightSensor.setUpdateInterval(100);
            subscription = LightSensor.addListener(data => {
                console.log(data);
                setLight(data.illuminance);
            });
        }
        subscribe();
        return () => subscription && subscription.remove();
    },[])
    console.log(light)
    return {available, light};
}
