import React, { useState } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home';
import Events from './components/Events';
import Contactus from './components/Contactus';
import Shop from './components/Shop';

function App() {

  const [sko, setSko] = useState([
    { skofoto: "shoe_01.jpg", skotekst: "Puma Highland 3000 - brown", id: 1 },
    { skofoto: "shoe_02.jpg", skotekst: "Asics Free Street", id: 2 },
    { skofoto: "shoe_03.jpg", skotekst: "New Balance Runner Bounce", id: 3 },
    { skofoto: "shoe_01.jpg", skotekst: "Puma Highland 3000 - brown", id: 4 },
    { skofoto: "shoe_02.jpg", skotekst: "Asics Free Street", id: 5 },
    { skofoto: "shoe_03.jpg", skotekst: "New Balance Runner Bounce", id: 6 },
   
  ])




  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />
        <Route exact path='/' component={() => <Home allbil={sko} /> } />
        <Route path='/Contactus' component={Contactus} />
        <Route path='/Events' component={Events} />
        <Route path='/Shop' component={() => <Shop allbil={sko} /> } />

      </BrowserRouter>


    </div>

  )

};






export default App;
