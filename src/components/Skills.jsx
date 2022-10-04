import { Link } from "react-router-dom";
import Scene from './Scene';
import StarsScene from './StarsScene';
import Spinner from './Spinner';

function Skills(){
    return(<>
        <div className="backgroundSkill">
            <Spinner />
        </div>
        <div>
        
            <StarsScene />
            <div className="myskills">
                <p className="p0">M</p>
                <p className="p1">i</p>
                <p className="p2">s</p>
                <h6>-</h6>
                <p className="p3">h</p>
                <p className="p4">a</p>
                <p className="p5">b</p>
                <p className="p6">i</p>
                <p className="p7">l</p>
                <p className="p8">i</p>
                <p className="p9">d</p>
                <p className="p10">a</p>
                <p className="p11">d</p>
                <p className="p12">e</p>
                <p className="p13">s</p>
            </div>
            <Scene />
            <div className='backbackskill'>
                <div className='backskill'>
                    <div className='skill'>
                        <p>Soy Desarrollador Front End. Me gusta mucho
                            los efecto UI, animaciones y el UX.
                            <br /><br />
                            Soy una persona organizada, que resuelve
                            problemas y mantiene la atencion muy bien
                            en su trabajo.
                            <br /><br />
                            Aprendo facil y rapido. Mis diseños son responsive.
                            Los lenguajes que pueden ver son los que domino hasta el momento.
                            <br /><br />
                            Ademas, estoy aprendiendo la libreria 'Three js' para
                            hacer este tipo de diseños 3D que son interactivos y orientados
                            a paginas web.
                        </p>
                        <Link to='/Contact' className='link1'>Trabajemos juntos en algo interesante.</Link>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Skills;