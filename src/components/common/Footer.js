function Footer(){
    return(
        <footer>
            <div class="container-fluid bg-dark text-white-50 footer mt-0 pt-5 wow fadeIn" data-wow-delay="0.1s">
                <div class="container py-5">
                    <div class="row g-5">
                        <div class="col-lg-3 col-md-6">
                            <h1 class="fw-bold text-primary mb-4">Asroy<span class="text-white">ForLife</span></h1>
                            <p>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita</p>
                            <div class="d-flex pt-2">
                                <a class="btn btn-square me-1" href="https://www.asroyfouncation.com"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square me-1" href="https://www.asroyfouncation.com"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square me-1" href="https://www.asroyfouncation.com"><i class="fab fa-youtube"></i></a>
                                <a class="btn btn-square me-0" href="https://www.asroyfouncation.com"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h5 class="text-light mb-4">Address</h5>
                            <p><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                            <p><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                            <p><i class="fa fa-envelope me-3"></i>info@example.com</p>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h5 class="text-light mb-4">Quick Links</h5>
                            <a class="btn btn-link" href="https://www.asroyfouncation.com">About Us</a>
                            <a class="btn btn-link" href="https://www.asroyfouncation.com">Contact Us</a>
                            <a class="btn btn-link" href="https://www.asroyfouncation.com">Our Services</a>
                            <a class="btn btn-link" href="https://www.asroyfouncation.com">Terms & Condition</a>
                            <a class="btn btn-link" href="https://www.asroyfouncation.com">Support</a>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h5 class="text-light mb-4">Newsletter</h5>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div class="position-relative mx-auto mx-400">
                                <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                                <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid copyright">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a href="https://www.asroyfouncation.com">Asroy For Life</a>, All Right Reserved.
                            </div>
                            <div class="col-md-6 text-center text-md-end">
                                Developed By <a href="https://learnwithomar.org">Omar Faruque</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="https://www.asroyfouncation.com" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
        </footer>
    )
}
export default Footer;