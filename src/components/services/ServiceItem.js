function ServiceItem(){
    return(
        <>
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
        </>
    )
}
export default ServiceItem;