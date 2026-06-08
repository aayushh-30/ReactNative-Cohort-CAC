import {useState, useEffect} from 'react';
import { Barometer } from 'expo-sensors';

export default function useBaro(){
    const [available, setAvailable] = useState(false);
    const [pressure, setPressure] = useState(0);

    useEffect(() => {
        let subscription;
        const subscribe = async () => {
            let isAvailable = await Barometer.isAvailableAsync();
            setAvailable(isAvailable);
            if (!isAvailable) return;
            Barometer.setUpdateInterval(100);
            subscription = Barometer.addListener(data => {
                setPressure(data.pressure);
            });
        }
        subscribe();
        return () => subscription && subscription.remove();
    },[])

    return {available, pressure};
}