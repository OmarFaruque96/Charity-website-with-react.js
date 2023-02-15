import Team from "../team/Team";

function AboutContent(){
    return(
        <>
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-5">
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="position-relative overflow-hidden h-100 mh-400" >
                                <img class="position-absolute w-100 h-100 pt-5 pe-5 of-cover l-0" src="img/about-1.jpg" alt="" />
                                <img class="position-absolute top-0 end-0 bg-white ps-2 pb-2 w-200 h-200" src="img/about-2.jpg" alt="" />
                            </div>
                        </div>
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="h-100 text-start">
                                <div class="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">About Us</div>
                                <h1 class="display-6 mb-5">We Help People In Need Around The World</h1>
                                <div class="bg-light border-bottom border-5 border-primary rounded p-4 mb-4">
                                    <p class="text-dark mb-2">Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet lorem sit clita duo justo erat amet</p>
                                    <span class="text-primary">Jhon Doe, Founder</span>
                                </div>
                                <p class="mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <a class="btn btn-primary py-2 px-3 me-3" href="#b">
                                    Learn More
                                    <div class="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                                        <i class="fa fa-arrow-right"></i>
                                    </div>
                                </a>
                                <a class="btn btn-outline-primary py-2 px-3" href="#h">
                                    Contact Us
                                    <div class="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                                        <i class="fa fa-arrow-right"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center mx-auto mb-5 wow fadeInUp mw-500" data-wow-delay="0.1s" >
                        <div class="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">What We Do</div>
                        <h1 class="display-6 mb-5">Learn More What We Do And Get Involved</h1>
                    </div>
                    <div class="row g-4 justify-content-center">
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="service-item bg-white text-center h-100 p-4 p-xl-5">
                                <img class="img-fluid mb-4" src="img/icon-1.png" alt=""/>
                                <h4 class="mb-3">Child Education</h4>
                                <p class="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                                <a class="btn btn-outline-primary px-3" href="#d">
                                    Learn More
                                    <div class="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                                        <i class="fa fa-arrow-right"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="service-item bg-white text-center h-100 p-4 p-xl-5">
                                <img class="img-fluid mb-4" src="img/icon-2.png" alt="" />
                                <h4 class="mb-3">Medical Treatment</h4>
                                <p class="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                                <a class="btn btn-outline-primary px-3" href="#d">
                                    Learn More
                                    <div class="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                                        <i class="fa fa-arrow-right"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="service-item bg-white text-center h-100 p-4 p-xl-5">
                                <img class="img-fluid mb-4" src="img/icon-3.png" alt="" />
                                <h4 class="mb-3">Pure Drinking Water</h4>
                                <p class="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                                <a class="btn btn-outline-primary px-3" href="#d">
                                    Learn More
                                    <div class="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                                        <i class="fa fa-arrow-right"></i>
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