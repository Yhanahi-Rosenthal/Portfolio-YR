import {motion, AnimatePresence} from 'framer-motion';
import '../css/myproject.css';


export default function MyProjects(){
    return(
        <motion.div
        
        initial={{width: 0}} // --> como inicia
        animate={{width: '100%'}} // --> la animacion en si
        exit={{x: '100%', transition:{duration:0.2}}} // --> donde termina la transicion. 
        >
                    <AnimatePresence>
                        {/* EL NAVBAR TIENE QUE IR DENTRO DE ESTA ETIQUETA SEPARADO EN OTRO COMPONENTE */}
                    </AnimatePresence>
            <div className="container">
                <h1>asdasd</h1>
            </div>
                
        </motion.div>
    )
}