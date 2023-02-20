
import './App.css'
import icon from './assets/icon1.png'
import icontwo from './assets/icon2.png'
import iconthree from './assets/icon3.png'
import iconfour from './assets/icon4.png'
import ironhackLogo from './assets/ironhack-logo-xs.png'
import menuTop from './assets/menu-top-xs.png'
function App() {

  return <div className="App">

<div>
         <img  className="logo" src={ironhackLogo} alt="ironhackLogo" />
         <img src={menuTop} alt="menuTop" />
      </div>

<section>

<img src={icon} alt='example' /> 

<img src={icontwo} alt='example' /> 

<img src={iconthree} alt='example' /> 
<img src={iconfour} alt='example' /> 
</section>
  </div>
 
}

export default App
