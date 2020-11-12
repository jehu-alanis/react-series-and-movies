import React, { useEffect } from 'react';
import 'bootswatch/dist/superhero/bootstrap.min.css';
import Loginf from './component/loginf'
import Descripcion from './component/descripcion'
import Navbar from './component/navbar'

import List from './component/list'
import Footer from './component/footer'


import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";


function App() {
 
 
 
  
  useEffect(() => {
    localStorage.setItem("logged", false);
  }, []);



  return (

<Router>
<Navbar />

<Route path="/" exact component={Loginf}    />


<Route path="/peliculas" exact component={List}    />

<Route path="/descripcion/:id"component={Descripcion}    />

<Footer/>


    </Router>
  );
}


export default App;
