import ServiceItem from "../services/ServiceItem";
function Services (){
    return(
        <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp mw-500" data-wow-delay="0.1s">
                <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">What We Do</div>
                <h1 className="display-6 mb-5">Learn More What We Do And Get Involved</h1>
            </div>
            <div className="row g-4 justify-content-center">
                <ServiceItem/>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                        <img className="img-fluid mb-4" src="img/icon-1.png" alt=""/>
                        <h4 className="mb-3">Child Education</h4>
                        <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                        <a className="btn btn-outline-primary px-3" href="">
                            Learn More
                            <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                                <i className="fa fa-arrow-right"></i>
                            </div>
                        </a>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                        <img className="img-fluid mb-4" src="img/icon-3.png" alt=""/>
                        <h4 className="mb-3">Pure Drinking Water</h4>
                        <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                        <a className="btn btn-outline-primary px-3" href="">
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
    )
}
export default Services;