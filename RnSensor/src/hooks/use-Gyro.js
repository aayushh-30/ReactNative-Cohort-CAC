import {useState, useEffect} from 'react';
import { Gyroscope } from 'expo-sensors';

export default function useGyro(){
    const [available, setAvailable] = useState(false);
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);
    const [z,setZ] = useState(0);

    useEffect(() => {
        let subscription;
        const sunscribe = async () => {
            let isAvailable = await Gyroscope.isAvailableAsync();
            setAvailable(isAvailable);
            if (!isAvailable) return;
            Gyroscope.setUpdateInterval(100);
            subscription = Gyroscope.addListener(data => {
                setX(data.x);
                setY(data.y);
                setZ(data.z);
            });

            
        }
        sunscribe();
        return () => subscription && subscription.remove();
    },[])

    return {available, x, y, z};
}