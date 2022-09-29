import Space from './Space';
import '../css/contact.css';
import Spinner from './Spinner';


export default function Contact(){
  

    return(
        <>  
            <Spinner />
             <Space />
           <div>
            <h1 className='h1'>Contactame</h1>
            <div className='contenedor'>
                    <div className="containerContact">
                        <a href="mailto:yhanai@hotmail.com" className='enlaces'>
                            <div className="email contenedorcito">
                                <img src='./imgs/email.png' className='imgContact'/>
                                <p className='aDonde'>Correo electronico</p>
                            </div>
                        </a>
                        <a href='https://www.linkedin.com/in/yhanahi-rosenthal/' target='_blank' className='enlaces'>
                            <div className="linkedin contenedorcito">
                                <img src='./imgs/linkedin.png' className='imgContact'/>
                                <p className='aDonde'>A traves de Linkedin</p>
                            </div>
                        </a>
                       
                    </div>
                </div>
           </div>     
        </>
    )
}