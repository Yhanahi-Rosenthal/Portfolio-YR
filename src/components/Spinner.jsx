import { useEffect, useState } from 'react';

function Spinner(){

    const [cargando, setCargando] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setCargando(false)
            
        }, 2000)
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