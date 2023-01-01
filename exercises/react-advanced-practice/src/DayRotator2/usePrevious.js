import { useEffect, useRef } from 'react';

const usePrevious = (val) => {
    const ref = useRef();
    useEffect(()=>{
        console.log('useEffect has been evoked and ref: ',ref);
        ref.current = val;
        console.log('ref has been updated: ',ref);
    },[val])
    return ref.current;
}

export default usePrevious;