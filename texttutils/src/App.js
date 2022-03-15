import './App.css'
import Navbar from './components/Navbar.js';
//import PropTypes from 'prop-types'
import Textform from './components/Textform.js';
//import { useState } from 'react';

function App() {
  //const [mode , setMode] = useState('dark');
 /* const togglemode =()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'black';
    }
    else{
      setMode ('dark');
    }

  }*/
  return (
    <>
    <Navbar title = "TEXT-UTILS" abouttext='You cool?' /*mode = {mode} *//>
    <div className="container my-6">
      <Textform heading = "Enter text to Analyze"/>
    </div>
    </>
  );
}
export default App;


