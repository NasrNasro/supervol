import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './Components/Error'
import Login from './Pages/Login';
import Main from './Pages/Main';
import NotFound from './Pages/NotFound';
import { getCurrentUser } from './redux/actions/authActions';
import PrivateRoute from './router/PrivateRoute';
import Dashboard from './Pages/Dashboard';
import EditProfile from './Pages/Dashboard/EditProfile';
import RegisterChoice from './Pages/RegisterChoice';
import RegisterParticular from './Pages/RegisterParticular';
import RegisterProfessional from './Pages/RegisterProfessional';
import ActivationPage from './Pages/ActivationPage';
import ActivationNewEmail from './Pages/ActivationNewEmail';
import SendColis from './Pages/SendColis';

function App() {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch])
  
  return (
    <div className="App">
      <Error />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<RegisterChoice />} />
        <Route path='register-particular' element={<RegisterParticular />} />
        <Route path='register-professional' element={<RegisterProfessional />} />
        <Route path='profile' element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />
        <Route path='editProfile' element={<EditProfile />} />
        <Route path='SendColis' element={<SendColis />} />
        <Route path='confirm/:activationcode' element={<ActivationPage />} />
        <Route path='confirmNewEmail/:activationcode' element={<ActivationNewEmail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
