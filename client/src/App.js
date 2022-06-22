import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Registration from './pages/registration';
import Login from './pages/login';
import LoggedIn from './pages/LoggedIn';


import Test from './pages/test';


function App() {
  

  return (
     <div className='App'>

      <Router>
        <Routes>
          <Route exact path='/' element={<Registration />}/>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/loggedIn' element={<LoggedIn />} />
          <Route exact path='/test' element={<Test />} />
        </Routes>
      </Router>

     </div>
  );
}

export default App;
