import './App.css';
import { Navbar } from './Components/Navbar.jsx';
import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home.jsx';
function App() {

  return (
    <>
      <div className="App">
      <header className="App-header">
        {/* <p>Start DocAtDoor</p> */}
        <Navbar/>

        <Routes>
          <Route  
            path='/'
            element={<Home/>}
          />
        </Routes>
        
      </header>
    </div>
    </>
  )
}

export default App
