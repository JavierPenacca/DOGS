import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./landing.css";
import { useDispatch } from 'react-redux';
import { getAllDogs } from '../../redux/actions';
// import { Github, Linkedin } from "../../image/SvgIcons";
import Logo from '../../image/Logo.png';
import Footer from '../../Components/Footer/Footer';

const Landing = () => {
const dispatch = useDispatch()
useEffect (()=>{
  dispatch(getAllDogs())
}, [dispatch])

return (
  <div className="container">
  <Link to="/home">
    <button className="buttonContainer">Entrar</button>
  </Link>
  {/* <Link to="/home">
    <button className="buttonContainer1">Busca un Perro</button>
  </Link>
  <Link to="/form">
    <button className="buttonContainer2">Crear una raza de perro</button>
  </Link>
  <Link to="/home">
    <button className="buttonContainer3">Pet Store</button>
  </Link> */}
  <div className='imageContainer'>
    <img src={Logo} alt="Logo" className='landing-logo' />
  </div>
  <Footer />
</div>
//     <div className={styles.landing}>
//       <div className={styles.divLeft}>
//       <Link to="/home" className={styles.divLeft} />
//       </div>
//       <div className={styles.divRight}>
//         <h1>¡Bienvenido a nuestra aplicación!</h1>
//         <p>Estamos encantados de tenerte aquí y presentarte el emocionante mundo de razas caninas. 
//           Ya sea que sea un usuario nuevo o experimentado, nuestra aplicación está diseñada para mejorar su experiencia y hacer su vida más fácil.
// Con nuestra aplicación, descubrirá una interfaz fluida e intuitiva que pone todo lo que necesita saber de sobre cada uno de nustros amigos de cuatro patas al alcance de su mano.</p>
// <p>Queremos contarle al mundo que cada perro es único, con sus características físicas y temperamentos peculiares. </p>
//         <p>Este proyecto ha sido desarrollado dentro del marco teorico del bootcamp de SoyHenry™ dentro de la etapa de "proyecto individual."</p>
//         <p>Desarrollo: Brian Andrais.</p>
//       </div>
//     </div>
  );
};

export default Landing;
