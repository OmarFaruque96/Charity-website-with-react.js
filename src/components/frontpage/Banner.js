function Banner () {
    return(
        <div class="container-fluid p-0">
            <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="w-100" src="img/carousel-1.jpg" alt="Image" />
                        <div class="carousel-caption">
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-lg-7 pt-5">
                                        <h1 class="display-4 text-white mb-3 animated slideInDown">Let's Change The World With Humanity</h1>
                                        <p class="fs-5 text-white-50 mb-5 animated slideInDown">Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet lorem sit clita duo justo erat amet</p>
                                        <a class="btn btn-primary py-2 px-3 animated slideInDown" href="">
                                            Learn More
                                            <div class="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                                                <i class="fa fa-arrow-right"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="w-100" src="img/carousel-2.jpg" alt="Image" />
                        <div class="carousel-caption">
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-lg-7 pt-5">
                                        <h1 class="display-4 text-white mb-3 animated slideInDown">Let's Save More Lifes With Our Helping Hand</h1>
                                        <p class="fs-5 text-white-50 mb-5 animated slideInDown">Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet lorem sit clita duo justo erat amet</p>
                                        <a class="btn btn-primary py-2 px-3 animated slideInDown" href="">
                                            Learn More
                                            <div class="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                                                <i class="fa fa-arrow-right"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
export default Banner;