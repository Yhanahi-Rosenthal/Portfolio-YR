import {useRef, useEffect} from "react";
import {cleanUpStars, mountStars} from './Start';
import "../css/Skills.css";

const StarsScene = () => {

    const mountRef1 = useRef(null)

    useEffect(()=>{
        mountStars(mountRef1)

    //Clean up scene
    return () => {
        cleanUpStars()
    }
    },[])

    return (
        <div
            className='stars'
            // style={{width: '100%', height: '100vh'}}
            ref={mountRef1}
        >
        </div>
    )
}

export default StarsScene;