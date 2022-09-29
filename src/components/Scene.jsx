import {useRef, useEffect} from "react";
import { cleanUpScene, mountScene } from "./script";
import "../css/Skills.css";

const Scene = () => {

    const mountRef = useRef(null)

    useEffect(()=>{
        mountScene(mountRef)

    //Clean up scene
    return () => {
        cleanUpScene()
    }
    },[])

    return (
        <div
            className="pepe"
            // style={{width: '100%', height: '100vh'}}
            ref={mountRef}
        >
        </div>
    )
}

export default Scene;