import { useEffect, useState } from 'react';
import '../css/spinner.css'

function Spinner(){

    const [cargando, setCargando] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setCargando(false)
            
        }, 1000)
    },[])

    return(
        <>
            {cargando && <div className="background">
                <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                <strong><p>Creando estilos...</p></strong> 
            </div>}
        </>
    )
}

export default Spinner;