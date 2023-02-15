function Donate(){
    return(
        <div class="container-fluid donate my-0 py-5" data-parallax="scroll">
            <div class="container py-5">
                <div class="row g-5 align-items-center justify-content-start text-start">
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div class="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">Donate Now</div>
                        <h1 class="display-6 text-white mb-5">Thanks For The Results Achieved With You</h1>
                        <p class="text-white-50 mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    </div>
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <div class="h-100 bg-white p-5">
                            <form>
                                <div class="row g-3">
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control bg-light border-0" id="name" placeholder="Your Name"/>
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="email" class="form-control bg-light border-0" id="email" placeholder="Your Email"/>
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="btn-group d-flex justify-content-around">
                                            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" checked />
                                            <label class="btn btn-light py-3" for="btnradio1">$10</label>

                                            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" />
                                            <label class="btn btn-light py-3" for="btnradio2">$20</label>

                                            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" />
                                            <label class="btn btn-light py-3" for="btnradio3">$30</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary px-5 h-60">
                                            Donate Now
                                            <div class="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                                                <i class="fa fa-arrow-right"></i>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Donate;