import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../redux/actions/authActions' 

function Navbar() {
  const auth=useSelector(state=>state.authReducer.auth)
  const dispatch=useDispatch()
  // logout
  const handleLogout=()=>{
    dispatch(logout())
  }
  return (
    <div>
        {/* header */}
        <header>
          {/* header inner */}
          <div className="header">
            <div className="header_white_section">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <div className="header_information">
                      <ul>
                        <li><img src="images/1.png" alt="#" /> 145.street road new York</li>
                        <li><img src="images/2.png" alt="#" /> +71  5678954378</li>
                        <li><img src="images/3.png" alt="#" /> Demo@hmail.com</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                  <div className="full">
                    <div className="center-desk">
                      <div className="logo"> <a href="index.html"><img src="images/logo.png" alt="#" /></a> </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                    <div className="menu-area">
                    <div className="limit-box">
                      <nav className="main-menu">
                        <ul className="menu-area-main">
                          <li className="active"> <a href="#">Envoyer un colis</a> </li>
                          <li> <a href="#about">Voir les annonces</a> </li>
                          {
                            auth ? 
                            <>
                            <li><Link to='/profile'> Profile </Link></li>
                            <li onClick={handleLogout}><Link to='/login'> Logout </Link></li>
                            </> : <>
                            <li><Link to='/register'>S'inscrire</Link></li>
                            <li><Link to='/login'>Se connecter</Link></li>
                            </>
                          }
                          
                          <li><a href="#contact">Comment ca marche ?</a></li>
                          <li><a href="#contact">Rentabiliser votre voyage</a></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end header inner */}
          </header>
      {/* end header */}
    </div>
  )
}

export default Navbar