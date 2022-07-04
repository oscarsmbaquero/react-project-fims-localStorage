import { useState } from "react";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Listado from "./components/Listado";
import Nav from "./components/Nav";



function App() {

  const [films,setFilms]=useState([]);

  return (
    <div className="layout">
        
        <Header/>
         <Nav/>
          <Listado films={films} setFilms={setFilms}/>
          <Aside   films={films} setFilms={setFilms}/>
        <Footer/>
    </div>
  );
}

export default App;
