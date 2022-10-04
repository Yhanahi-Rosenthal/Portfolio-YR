import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import '../css/Navbar.css';

export default function Navbar(){

    const [navbar, setNavbar] = useState(false)

    const upDate = () =>{
        if(navbar){
            setNavbar(false)
            }else{
                setNavbar(true)
            }
    }

    return(
        <> 
        <div className='Navbar1'>                     
            <div className='containerImg'>
                <ul className='content'>                    
                    <li className='imgimg' onClick={()=>{upDate()}}><img src='./imgs/menu.png' className='menu'/>  
            {navbar && <ul>
                            <li><NavLink to='/Home' className='LinkNavbar1' activeClassName='active' >Home</NavLink></li>
                            <li><NavLink to='/Skills' className='LinkNavbar1' activeClassName='active'>Skills</NavLink></li>
                            <li><NavLink to='/MyProjects' className='LinkNavbar1' activeClassName='active' >MyProjects</NavLink></li>
                            <li><NavLink to='/Contact' className='LinkNavbar1' activeClassName='active' >Contact</NavLink></li>
                            <li className='redes1'>
                                <a href="https://github.com/Yhanahi-Rosenthal" className="redes1" target='_blank'><img src='./imgs/github1.png' className='redes'/></a>
                                <a href="https://www.linkedin.com/in/yhanahi-rosenthal/" className="redes1" target='_blank'><img src='./imgs/in.png' className='redes'/></a>
                            </li>
                        </ul>}
                    </li>                 
                </ul>
            </div>
        </div>  
            <div className='Navbar'>
                    <NavLink to='/Home' className='LinkNavbar' activeClassName='active' >Home</NavLink>
                    <NavLink to='/Skills' className='LinkNavbar' activeClassName='active'>Skills</NavLink>
                    <NavLink to='/MyProjects' className='LinkNavbar' activeClassName='active' >MyProjects</NavLink>
                    <NavLink to='/Contact' className='LinkNavbar' activeClassName='active' >Contact</NavLink>
                <div>
                    <a href="https://github.com/Yhanahi-Rosenthal" className="redes1" target='_blank'><img src='./imgs/github1.png' className='redes'/></a>
                    <a href="https://www.linkedin.com/in/yhanahi-rosenthal/" className="redes1" target='_blank'><img src='./imgs/in.png' className='redes'/></a>
                </div>
            </div>  
        </> 
    )
}