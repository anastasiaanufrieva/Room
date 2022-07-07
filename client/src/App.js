import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Room from './Components/Room/Room';
import Elem from './Components/Elem/Elem';
import MyNav from './Components/Nav/Nav';
import { Container } from 'reactstrap';
import MainPage from './Components/MainPage/MainPage';
import { GlobalContext } from './contexts/globalContexts'
import BlackTheme from './Components/BlackTheme/BlackTheme';
import { useContext, useEffect } from 'react';
import Login from './Components/Login/Login';
import Logup from './Components/Logup/Logup';
import AuthRouter from './Components/AuthRouter/AuthRouter';
import { useDispatch } from 'react-redux';
import { checkUser } from './Redux/actions/userAction';

function App() {
  const { black } = useContext(GlobalContext)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUser());
  }, []);
  return (
    <div className={!black ? 'dark body' : 'body'}>

      <Container >
        <BlackTheme />
        <MyNav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/rooms" element={<Room />} />
          <Route path="/rooms/:id" element={<Elem />} />
          <Route path="/user/logup" element={<AuthRouter><Logup /></AuthRouter>} />
          <Route path="/user/login" element={<AuthRouter><Login /></AuthRouter>} />
        </Routes>
      </Container>

    </div>
  );
}

export default App;
