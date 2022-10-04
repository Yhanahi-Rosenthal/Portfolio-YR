import {useRef, useEffect} from "react";
import {cleanUpSpace, mountSpace} from './ScriptSpace';

const Space = () => {

    const mountRef3 = useRef(null)

    useEffect(()=>{
        mountSpace(mountRef3)

    //Clean up scene
    return () => {
        cleanUpSpace()
    }
    },[])

    return (
        <div
            className='spaces'
            // style={{width: '100%', height: '100vh'}}
            ref={mountRef3}
        >
        </div>
    )
}

export default Space