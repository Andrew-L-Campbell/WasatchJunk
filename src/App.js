import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Components/Pages/HomePage';
import AboutPage from './Components/Pages/AboutPage';
import LocationsServedPage from './Components/Pages/LocationsServedPage';
import PricingPage from './Components/Pages/PricingPage';
import ServicesPage from './Components/Pages/ServicesPage';
import BookNowPage from './Components/Pages/BookNowPage';
import Footer from './Components/Footer';
import Alpine from './Components/Cities/Alpine';
import AmericanFork from './Components/Cities/AmericanFork';
import CedarHills from './Components/Cities/CedarHills';
import EagleMountain from './Components/Cities/EagleMountain';
import Lehi from './Components/Cities/Lehi';
import Highland from './Components/Cities/Highland';
import Lindon from './Components/Cities/Lindon';
import PleasantGrove from './Components/Cities/PleasantGrove';
import Orem from './Components/Cities/Orem';
import Provo from './Components/Cities/Provo';
import SaratogaSprings from './Components/Cities/SaratogaSprings';
import Springville from './Components/Cities/Springville';
import Vinyard from './Components/Cities/Vinyard';
import Bluffdale from './Components/Cities/Bluffdale';
import CottonwoodHeights from './Components/Cities/CottonwoodHeights';
import Draper from './Components/Cities/Draper';
import Herriman from './Components/Cities/Herriman';
import Holiday from './Components/Cities/Holiday';
import Kearns from './Components/Cities/Kearns';
import Magna from './Components/Cities/Magna';
import Midvale from './Components/Cities/Midvale';
import Millcreek from './Components/Cities/Millcreek';
import Murray from './Components/Cities/Murray';
import Riverton from './Components/Cities/Riverton';
import SaltLake from './Components/Cities/SaltLake';
import Sandy from './Components/Cities/Sandy';
import SouthSaltLake from './Components/Cities/SouthSaltLake';
import SouthJordan from './Components/Cities/SouthJordan';
import WestJordan from './Components/Cities/WestJordan';
import Taylorsville from './Components/Cities/Taylorsville';
import WestValley from './Components/Cities/WestValley';
import WHiteCity from './Components/Cities/WhiteCity';
import WhiteCity from './Components/Cities/WhiteCity';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/book-now' element={<BookNowPage/>}/>
        <Route path='/locations' element={<LocationsServedPage/>}/>
        <Route path='/pricing' element={<PricingPage/>}/>
        <Route path='/services' element={<ServicesPage/>}/>
        <Route path ='/locations/alpine' element={<Alpine/>}/>
        <Route path ='/locations/american-fork' element={<AmericanFork/>}/>
        <Route path ='/locations/cedar-hills' element={<CedarHills/>}/>
        <Route path ='/locations/eagle-mountain' element={<EagleMountain/>}/>
        <Route path ='/locations/highland' element={<Highland/>}/>
        <Route path ='/locations/lehi' element={<Lehi/>}/>
        <Route path ='/locations/lindon' element={<Lindon/>}/>
        <Route path ='/locations/pleasant-grove' element={<PleasantGrove/>}/>
        <Route path ='/locations/orem' element={<Orem/>}/>
        <Route path ='/locations/provo' element={<Provo/>}/>
        <Route path ='/locations/saratoga-springs' element={<SaratogaSprings/>}/>
        <Route path ='/locations/springville' element={<Springville/>}/>
        <Route path ='/locations/vinyard' element={<Vinyard/>}/>

        <Route path ='/locations/bluffdale' element={<Bluffdale/>}/>
        <Route path ='/locations/cottonwood-heights' element={<CottonwoodHeights/>}/>
        <Route path ='/locations/Draper' element={<Draper/>}/>
        <Route path ='/locations/herriman' element={<Herriman/>}/>
        <Route path ='/locations/holiday' element={<Holiday/>}/>
        <Route path ='/locations/kearns' element={<Kearns/>}/>
        <Route path ='/locations/magna' element={<Magna/>}/>
        <Route path ='/locations/midvale' element={<Midvale/>}/>
        <Route path ='/locations/millcreek' element={<Millcreek/>}/>
        <Route path ='/locations/murray' element={<Murray/>}/>
        <Route path ='/locations/riverton' element={<Riverton/>}/>
        <Route path ='/locations/salt-lake' element={<SaltLake/>}/>
        <Route path ='/locations/sandy' element={<Sandy/>}/>
        <Route path ='/locations/south-salt-lake' element={<SouthSaltLake/>}/>
        <Route path ='/locations/south-jordan' element={<SouthJordan/>}/>
        <Route path ='/locations/taylorsville' element={<Taylorsville/>}/>
        <Route path ='/locations/west-jordan' element={<WestJordan/>}/>
        <Route path ='/locations/west-valley' element={<WestValley/>}/>
        <Route path ='/locations/white-city' element={<WhiteCity/>}/>

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
