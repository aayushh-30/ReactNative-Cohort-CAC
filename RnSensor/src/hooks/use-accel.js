// Hook to get accelerometer data from the device. Returns an object with the following properties:
// - available: boolean indicating if the accelerometer is available on the device
// - x: the x-axis acceleration value
// - y: the y-axis acceleration value
// - z: the z-axis acceleration value
import {useState, useEffect} from 'react';
import { Accelerometer } from 'expo-sensors';

export default function useAccel() {
    const [available, setAvailable] = useState(false);
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);
    const [z,setZ] = useState(0);

    useEffect(() => {
        let subscription;
        const subscribe = async () => {
            // Step 1 : Check if the accelerometer is available on the device
            let isAvailable = await Accelerometer.isAvailableAsync();
            setAvailable(isAvailable);
            if (!isAvailable) return;

            // Step 2 : Set the update interval for the accelerometer data (in milliseconds)
            Accelerometer.setUpdateInterval(100);

            // Step 3 : Subscribe to the accelerometer data and update the state variables with the new values
            subscription = Accelerometer.addListener(data => {
                setX(data.x);
                setY(data.y);
                setZ(data.z);
            });

        }
        subscribe();
        return () => subscription && subscription.remove();
    },[])

    return {available, x, y, z};
}