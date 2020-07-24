import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';

const useTime = (refreshCycle = 100) => {
    const [now, setNow] = useState(getTime());

    useEffect(() => {
        const intervalId = setInterval(
            () => setNow(getTime()),
            refreshCycle,
        );
        return () => clearInterval(intervalId);
    },        [refreshCycle, setInterval, clearInterval, setNow, getTime]);

    return now;
};


export const getTime = () => {
    return DateTime.local();
};

export default useTime;