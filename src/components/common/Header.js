import { Link } from "react-router-dom";
import {useState} from 'react'
function Header(){

    const [sticky, setSticky] = useState(false);

    function setFixed(){
        if(window.scrollY >= 300){
            setSticky(true);
        }else{
            setSticky(false);
        }
    }

    window.addEventListener("scroll", setFixed)

    return(
    <header>

        {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-grow text-primary" role="status"></div>
        </div> */}
           
        <div className={sticky ? 'container-fluid fixed-top px-0 wow fadeIn bg-dark shadow' : 'container-fluid fixed-top px-0 wow fadeIn'} data-wow-delay="0.1s">
            <div className="top-bar text-white-50 row gx-0 align-items-center d-none d-lg-flex">
                <div className="col-lg-6 px-5 text-start">
                    <small><i className="fa fa-map-marker-alt me-2"></i>Mohammadpur, Dhaka, BD</small>
                    <small className="ms-4"><i className="fa fa-envelope me-2"></i>info@asroyforlife.com</small>
                </div>
                <div className="col-lg-6 px-5 text-end">
                    <small>Follow us:</small>
                    <a className="text-white-50 ms-3" href="https://www.google.com"><i className="fab fa-facebook-f"></i></a>
                    <a className="text-white-50 ms-3" href="https://www.google.com"><i className="fab fa-twitter"></i></a>
                    <a className="text-white-50 ms-3" href="https://www.google.com"><i className="fab fa-linkedin-in"></i></a>
                    <a className="text-white-50 ms-3" href="https://www.google.com"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
    
            <nav className="navbar navbar-expand-lg navbar-dark py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                <Link to="/" className="navbar-brand ms-4 ms-lg-0">
                <h1 className="fw-bold text-primary mb-4">Asroy<span className="text-white">ForLife</span></h1>
                </Link>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/about" className="nav-item nav-link">About</Link>
                        <Link to="/causes" className="nav-item nav-link">Causes</Link>
                        <Link to="/csp" className="nav-item nav-link ">CSP</Link>
                        <Link to="/contact" className="nav-item nav-link ">Contact</Link>
                    </div>
                    <div className="d-none d-lg-flex ms-2">
                        <Link className="btn btn-outline-primary py-2 px-3" to="/donate">
                            Donate Now
                            <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                                <i className="fa fa-arrow-right"></i>
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
        
        
    </header>
    )
}
export default Header;