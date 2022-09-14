import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

function Main() {
  return (
    <>
    <Navbar />
    <div>
    <section>
        <div className="banner-main">
          <img src="images/banner.jpg" alt="#" />
          <div className="container">
            <div className="text-bg">
              <h1>America<br /><strong className="white">Amazing Tour</strong></h1>
              <div className="button_section"> <a className="main_bt" href="#">Read More</a></div>
              <div className="container">
                <form className="main-form">
                  <h3>Find Your Tour</h3>
                  <div className="row">
                    <div className="col-md-9">
                      <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                          <label>Keywords</label>
                          <input className="form-control" placeholder type="text" name />
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                          <label>Category</label>
                          <select className="form-control" name="Any">
                            <option>Any</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                          </select>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                          <label>Min Price</label>
                          <input className="form-control" placeholder={"00.0"} type="text" name={"00.0"} />
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                          <label>Duration</label>
                          <input className="form-control" placeholder="Any" type="text" name="Any" />
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                          <label>Date</label>
                          <input className="form-control" placeholder="Any" type="date" name="Any" />
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                          <label>Max Price</label>
                          <input className="form-control" placeholder={"00.0"} type="text" name={"00.0"} />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                      <a href="#">search</a>
                    </div>
                  </div>
                </form>
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

export default Main