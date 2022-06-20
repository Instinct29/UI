import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Registration from './registration';
import Login from './login';
import LoggedIn from './LoggedIn';


function App() {
  

  return (
     <div className='App'>

      <Router>
        <Routes>
          <Route exact path='/' element={<Registration />}/>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/loggedIn' element={<LoggedIn />} />
        </Routes>
      </Router>

     </div>
  );
}

export default App;
