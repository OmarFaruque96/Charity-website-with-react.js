import Team from "../team/Team";
function AboutContent(){
    return(
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="position-relative overflow-hidden h-100 mh-400" >
                                <img className="position-absolute w-100 h-100 pt-5 pe-5 of-cover l-0" src="img/about-1.jpg" alt="" />
                                <img className="position-absolute top-0 end-0 bg-white ps-2 pb-2 w-200 h-200" src="img/about-2.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="h-100 text-start">
                                <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">About Us</div>
                                <h1 className="display-6 mb-5">We Help People In Need Around The World</h1>
                                <div className="bg-light border-bottom border-5 border-primary rounded p-4 mb-4">
                                    <p className="text-dark mb-2">Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet lorem sit clita duo justo erat amet</p>
                                    <span className="text-primary">Jhon Doe, Founder</span>
                                </div>
                                <p className="mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <a className="btn btn-primary py-2 px-3 me-3" href="#b">
                                    Learn More
                                    <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                                        <i className="fa fa-arrow-right"></i>
                                    </div>
                                </a>
                                <a className="btn btn-outline-primary py-2 px-3" href="#h">
                                    Contact Us
                                    <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                                        <i className="fa fa-arrow-right"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp mw-500" data-wow-delay="0.1s" >
                        <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">What We Do</div>
                        <h1 className="display-6 mb-5">Learn More What We Do And Get Involved</h1>
                    </div>
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                                <img className="img-fluid mb-4" src="img/icon-1.png" alt=""/>
                                <h4 className="mb-3">Child Education</h4>
                                <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                                <a className="btn btn-outline-primary px-3" href="#d">
                                    Learn More
                                    <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                                        <i className="fa fa-arrow-right"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                                <img className="img-fluid mb-4" src="img/icon-2.png" alt="" />
                                <h4 className="mb-3">Medical Treatment</h4>
                                <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                                <a className="btn btn-outline-primary px-3" href="#d">
                                    Learn More
                                    <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                                        <i className="fa fa-arrow-right"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                                <img className="img-fluid mb-4" src="img/icon-3.png" alt="" />
                                <h4 className="mb-3">Pure Drinking Water</h4>
                                <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                                <a className="btn btn-outline-primary px-3" href="#d">
                                    Learn More
                                    <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                                        <i className="fa fa-arrow-right"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Team/>

        </>
    )
}
export default AboutContent;