import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import "./App.css";
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/RowPost/Rowpost';
import {action,originals} from './urls';


function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Rowpost url={originals} title='Netflix originals'/>
      <Rowpost url={action} title='Action' isSmall/>

    </div>
  )
}

export default App
