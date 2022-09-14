import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

function RegisterChoice() {
  return (
    <>
    <Navbar />
    <div>
        <section className="pt-5 pb-5 mt-0 align-items-center d-flex bg-dark" style={{minHeight: '100vh', backgroundSize: 'cover', backgroundImage: 'url(https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1920&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=c0d43804e2c7c93143fe8ff65398c8e9)'}}>
        <div className="container-fluid">
          <div className="row  justify-content-center align-items-center d-flex-row text-center h-100">
            <div className="col-12 col-md-4 col-lg-3   h-50 ">
              <div className="card shadow">
                <div className="card-body mx-auto">
                  <h4 className="login">Register</h4>
                  <p className="text">Choose your status</p>
                    <div className="form-group">
                    <Link to='/register-particular'><button type="submit" className="btn btn-primary btn-block"> particular </button></Link>
                    </div>
                    <div className="form-group">
                    <Link to='/register-professional'><button type="submit" className="btn btn-primary btn-block"> professional </button></Link>
                    </div>
                    <p className="text">Have an account?
                      <Link to='/login'> Login </Link>
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  )
}

export default RegisterChoice