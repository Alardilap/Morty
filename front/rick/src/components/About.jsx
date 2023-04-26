import styles from "./About.module.css"
import { Link } from "react-router-dom";

function About (props) {

    return (
      <div className={styles.fondo}>
     <div className={styles.imagen}>   
     
       <div className={styles.about}>
        <h1>About Me</h1> 
       <p className={styles.paboutme}>
  
       Soy Maria Alejandra Ardila, estudiante de desarrollo Full Stack,
       pero con preferencia hacia el Frontend, sin antecedentes en el mundo
       de la programación, por lo que esta App de Rick And Morty propuestra como trabajo
       integrador del Bootcamp de Henry es mi primer proyecto.
       Me encuentro interesada en aprender, profundizar en las diferentes tecnologías para crecer
       en este ámbito que me apasiona. Gracias por leer y visitar mi App.
   
      
       </p>
       <a className={styles.botongit}
        href="https://github.com/Alardilap" target="hola">GitHub</a>
       <a className={styles.botonlin} 
       href="https://www.linkedin.com/in/alejandra-ardila-63b6b8270/" target="hola">Linkedink</a>
       </div>
       
   <div className={styles.aboutrick}> 
       <h2 className={styles.titulo}>About Rick And Morty App</h2>
       <p className={styles.parrafo}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
         the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
         and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
          into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
         
      </p>
      <Link to={`/home`} className={styles.botonir}>Ir</Link>
            </div>
            
            </div>
            </div>

           
    );
 }
 export default About;