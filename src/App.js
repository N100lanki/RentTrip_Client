import './App.css';
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import  { Home, Navbar, Contact, Signin, MyTrip, About , NewTrip } from './components';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/new-trip' element={<NewTrip/>} />
        <Route path='/my-trips' element={<MyTrip/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/signin' element={<Signin/>} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
