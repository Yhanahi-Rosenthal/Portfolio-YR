import Wave from './Wave';
import '../css/myproject.css';
import {Link} from 'react-router-dom';
import Shein from '../img/SheinImage.png'
import Cake from '../img/cake.png'
import Blent from '../img/blent.png'


export default function MyProjects(){
    return(<>
            <div className="container">
                <Wave />
                <div className='titlePro'>
                    <p className='lett letter1 '>M</p>
                    <p className='lett letter2 '>y</p>
                    <p className='lett slatch '>-</p>
                    <p className='lett letter3 '>P</p>
                    <p className='lett letter4 '>r</p>
                    <p className='lett letter5 '>o</p>
                    <p className='lett letter6 '>j</p>
                    <p className='lett letter7 '>e</p>
                    <p className='lett letter8 '>c</p>
                    <p className='lett letter9 '>t</p>
                    <p className='lett letter10 '>'s</p>
                </div>
                <div className='myProjectContainer'>
                    <div className='myProjectCard'>
                        <a href='https://shein-shein.vercel.app/' className='linkMyProject' target='_blank'>
                            <div className='cardcard'>
                                <p className='boton'>Ir a la pagina</p>
                            </div>                         
                        </a>
                         <div className='card'>
                            <img src={Shein} className='img' />
                        </div>
                    </div>
                    <div className='myProjectCard'>
                        <a href='https://cake-theta.vercel.app/Inicio' className='linkMyProject' target='_blank'>
                            <div className='cardcard'>
                                <p className='boton'>Ir a la pagina</p>
                            </div>                         
                        </a>
                         <div className='card'>                            
                            <img src={Cake} className='img' />
                        </div>
                    </div>
                    <div className='myProjectCard'>
                        <a href='https://page-blent-music-okaux93g1-yhanahi-rosenthal.vercel.app/' className='linkMyProject' target='_blank'>
                            <div className='cardcard'>
                                <p className='boton'>Ir a la pagina</p>
                            </div>                         
                        </a>
                         <div className='card'>
                            <img src={Blent} className='img' />                            
                        </div>
                    </div>
                </div>
            </div>
    </>   
    )
}