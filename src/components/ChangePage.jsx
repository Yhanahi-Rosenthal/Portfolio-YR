import Skills from './Skills';
import Navbar from './Navbar';
import Home from './Home';
import MyProjects from './MyProjects';
import Contact from './Contact';
import {Route, Routes, useLocation} from 'react-router-dom';
import Footer from './Footer';

function ChangePage(){

    
    const location = useLocation()

    return(
        <>
            <Navbar />
            <Routes location={location} key={location.pathname} >
                <Route path='/' element={<Home />} className='Home' />
                <Route path='/Home' element={<Home />} className='Home' />
                <Route path='/Skills' element={<Skills />} className='Home' />
                <Route path='/MyProjects' element={<MyProjects />} className='Home' />
                <Route path='/Contact' element={<Contact />} className='Home' />
            </Routes>
            <Footer />
        </>
        
    )
}

export default ChangePage;