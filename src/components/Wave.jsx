import {useRef, useEffect} from "react";
import {cleanUpWave, mountWave} from './ScriptWave';

const Wave = () => {

    const mountRef2 = useRef(null)

    useEffect(()=>{
        mountWave(mountRef2)

    //Clean up scene
    return () => {
        cleanUpWave()
    }
    },[])

    return (
        <div
            className='wave'
            ref={mountRef2}
        >
        </div>
    )
}

export default Wave;