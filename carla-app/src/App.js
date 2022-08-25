import './App.css';
import Contacto from './components/Contacto';
import Destacado from './components/Destacado';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Productos from './components/Productos';
import Quienessomos from './components/Quienessomos';

function App() {
  return (
    <div className='container-fluid fondo_rosa' >
     <NavBar/>
     <Destacado/>
     <Productos/>
     <Contacto/>
     <Quienessomos/>
     <Footer/>

    </div>
  );
}

export default App;
