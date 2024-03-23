import './App.css';
import { Login } from './Login';
import { Home } from './Home';
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';
import image from '../src/photo1.jpg'

import { Update } from './Usestate';
import { Use2 } from './useState2';
import { Mydate } from './Showdate';
import { Mytime } from './Showtime';
import { Usestate3 } from './Usestate3';
import { Useprovider } from './Useprovider';
import { Newproject } from './Newproject';
import { Useprovider1 } from './Useprovider1';
import { Useeffect } from './Useeffect';
import { Useeffect2 } from './Useeffect2';
import { Api } from './Api';
import { Api2 } from './Api2';
import { Theme } from './Theme';
import { Api3 } from './Api3';
import { Usenavigate } from './Usenavigate';
import { Usenavigate1 } from './Usenavigate1.';
import { Usenavigate2 } from './Usenavigate2';
import { UseParams } from './Useparam';
import { Useparam1 } from './Useparam1';

function App() {
  return (
    <>
 
    <BrowserRouter>
    <Link to='/'>homepage</Link><br />
    <Link to='/usestate'>Usestate</Link><br />
    <Link to='/usestate2'>Usestate2</Link><br />
    <Link to='/showdate'>showdate</Link><br />
     <Link to='/showtime'>showtime</Link><br />
    <Link to='/usestate3'>usestate3</Link><br />
    <Link to='/usecontext'>usecontext</Link><br />
    <Link to='/usecontext2'>usecontext2</Link><br />
    <Link to='/newproject'>Newproject</Link><br />
    <Link to='/useeffect'>UseEffect</Link><br />
    <Link to='/useeffect2'>UseEffect2</Link><br /> */
    <Link to='/api'>API</Link><br />
    <Link to='/api2'>API2</Link><br />
    <Link to='/api3'>API3</Link><br />
     <Link to='/theme'>ThemeChange</Link><br />
 <Link to='/useNavigate'>useNavigate</Link><br />
 <Link to='/Usenavigate1'>useNavigate1</Link><br />
 <Link to='/Usenavigate2'>useNavigate2</Link><br />
 <Link to='/Params/roshannayak@gmail.com'>useParams</Link><br />
 <Link to='Params/warmachine68'>useParams1</Link><br />

    <Routes>
      <Route extact path='/' element={<Login/>}/>
      <Route extact path='/usestate' element={<Update/>}/>
      <Route extact path='/usestate2' element={<Use2/>}/>
      <Route extact path='/showdate' element={<Mydate/>}/>
      <Route extact path='/showtime' element={<Mytime/>}/>
      <Route extact path='/usestate3' element={<Usestate3/>}/>
      <Route extact path='/usecontext' element={<Useprovider/>}/>
      <Route extact path='/usecontext2' element={<Useprovider1/>}/>
      <Route extact path='/newproject' element={<Newproject/>}/>
      <Route extact path='/useeffect' element={<Useeffect/>}/>
      <Route extact path='/useeffect2' element={<Useeffect2/>}/>
      <Route extact path='/theme' element={<Theme/>}/>
      <Route extact path='/api' element={<Api/>}/>
      <Route extact path='/api2' element={<Api2/>}/>
      <Route extact path='/api3' element={<Api3/>}/>
      <Route extact path='/useNavigate' element={<Usenavigate/>}/>
      <Route extact path='/Usenavigate1' element={<Usenavigate1/>}/>
      <Route extact path='/Usenavigate2' element={<Usenavigate2/>}/>
      <Route extact path='/Params/:email' element={<UseParams/>}/>
      <Route extact path='Params/:username' element={<Useparam1/>}/>
      <Route extact path='/home' element={<Home image1={image}  />}/>    
      
    </Routes>
    </BrowserRouter>
    </>
  
  );
}

export default App;
