import { Link } from 'react-router-dom';
import Bg from './Bg';
import fondo from '../img/fondo1.png';
import fondo3 from '../img/fondo4.png';
import '../css/Home.css';


export default function About(){

    

    return(
        <>
            <Bg className='bg'/>
            <img src={fondo} className='backphoto' />
            <div className='IAM'>
                <p className='hi'>HI,</p>
                <p className='myname'>MY NAME IS YHANAHI ROSENTHAL </p>
                <p className='and'>AND</p>
                <p className='im'>I'M FRONT END DEVELOPER</p>
            </div>
            <img src={fondo3} className='backphoto3' />
            <div className='BackbackCard'>
                <div className='backCard'>
                    <div className="resume">
                        <h2 className='title'>About me</h2>
                        <p className='resuming'>
                            Mi nombre es Yhanahi Rosenthal y soy desarrollador Front end.
                            <br /><br />
                            Busco trabajos que me permitan seguir 
                            ampliando mi experiencia y aprender de grandes profesionales.
                            <br /><br />
                            Quiero seguir creciendo en el mundo del desarrollo de software y lograr grandes cosas.
                            <br /><br />
                            Los principales lenguajes de programación que domino 
                            podras verlos en {<Link to='/Skills' className='link'>Skills</Link>}
                        </p>
                    </div>   
                </div>             
            </div>
            <div className='BackbackCard'>
                <div className='backCard1'>
                    <h2 className='resume'>Algo mas sobre mi</h2>
                    <p className='resuming'>
                        Estoy en camino a ser desarrollador FullStack pero de momento me concentro 
                        en mejorar al maximo mis habilidades como Diseñador web y desarrollador Front end, ademas estoy estudiando ingles por mi cuenta.
                        <br /><br />
                        Hay muchas librerias de diseño que ayudan a un desarrollador a lograr resultados mas rapidos pero
                        yo prefiero diseñar y construir paginas por mi mismo para darle el mejor estilo.
                        <br /><br />
                        Ademas, me gusta aprender de todo y disfruto haciendolo.
                        <br /><br />
                        <h3 className='resume'>Adicionalmente</h3>
                        Cuando no estoy programando, me gusta hacer ejercicio.
                        <br />
                        Soy apasionado del deporte, me gustan la mayoria de los deporten en equipo, principalmente jugar 
                        al futbol.
                        <br /><br />
                        Sin mucho mas que decir o quizas si..., te invito a que veas mi pestaña de {<Link to='/MyProjects' className='link' >MyProjects</Link>}
                    </p>
                </div>
            </div>
        </>
    )
}