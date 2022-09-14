import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { registerProfessional } from '../redux/actions/authActions'

function RegisterProfessional() {
    const [data, setData]=useState({name:"", phone:"", birth:"", email:"", password:""})
  const [Photo, setPhoto]=useState(null)
  const [PatentPhoto, setPatentPhoto]=useState(null)
  const [commercialRegisterPhoto, setCommercialRegisterPhoto]=useState(null)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  // handleChange
  const handleChange=e=>{
    setData({...data, [e.target.name]:e.target.value})
  }
  // handleSubmit
  const handleSubmit=e=>{
    e.preventDefault();
    dispatch(registerProfessional(data,Photo,PatentPhoto,commercialRegisterPhoto,navigate));
  }

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
                  <h4 className="register">Create Account</h4>
                  <p className="text">Get started with your free account</p>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-user" /> </span>
                      </div>
                      <input name="name" className="form-control" placeholder="Full name" type="text" onChange={handleChange}/>
                    </div>
                    <div className="form-group input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-user" /> </span>
                      </div>
                      <input name="phone" className="form-control" placeholder="Phone Number" type="text" onChange={handleChange}/>
                    </div>
                    <div className="form-group input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-user" /> </span>
                      </div>
                      <input name="birth" className="form-control" placeholder="Birth Date" type="date" onChange={handleChange}/>
                    </div>
                    <div className="form-group input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-user" /> </span>
                      </div>
                      <label for="files" class="input-group-text" style={{width:'84%'}}>Import photo</label>
                      <input id="files" style={{display:'none'}} type="file" onChange={e=>setPhoto(e.target.files[0])}></input>
                    </div>
                    <div className="form-group input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-user" /> </span>
                      </div>
                      <label for="files1" class="input-group-text" style={{width:'84%'}}>Import patent photo</label>
                      <input id="files1" style={{display:'none'}} type="file" onChange={e=>setPatentPhoto(e.target.files[0])}></input>
                    </div>
                    <div className="form-group input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-user" /> </span>
                      </div>
                      <label for="files2" class="input-group-text" style={{width:'84%'}}>Import commercial register</label>
                      <input id="files2" style={{display:'none'}} type="file" onChange={e=>setCommercialRegisterPhoto(e.target.files[0])}></input>
                    </div>
                    <div className="form-group input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                      </div>
                      <input name="email" className="form-control" placeholder="Email address" type="email" onChange={handleChange}/>
                    </div>
                    <div className="form-group input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                      </div>
                      <input name="password" className="form-control" placeholder="Create password" type="password" onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary btn-block" > Create Account </button>
                    </div>
                    <p className="text">Have an account?
                      <Link to='/login'> Log In </Link>
                    </p>
                  </form>
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

export default RegisterProfessional