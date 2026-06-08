import {useEffect, useState} from 'react';
import { DeviceMotion } from 'expo-sensors';
export default function useDM(){
    const [available, setAvailable] = useState(false);
    const [data, setData] = useState({});
    useEffect(() => {
        let subscription;
        const subscribe = async () => {
            let isAvailable = await DeviceMotion.isAvailableAsync();
            setAvailable(isAvailable);
            if (!isAvailable) return;
            DeviceMotion.setUpdateInterval(100);
            subscription = DeviceMotion.addListener((data) => {
                setData(data);
            });
        };
        subscribe();
        return () => subscription && subscription.remove();
    }, []);
    return {available, data};
}