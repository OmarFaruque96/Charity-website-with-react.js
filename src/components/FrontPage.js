import Header from './common/Header';
import Footer from './common/Footer';
import HomeBanner from './frontpage/Banner';
import About from './frontpage/About';
import School from './frontpage/School';
import CSP from './csp/CSP';
import Donate from './donate/Donate';
import Team from './team/Team';

function FrontPage(){
    return(
        <>
            <Header/>
            <HomeBanner/>
            <About/>
            <School/>
            <CSP/>
            <Donate/>
            <Team/>
            <Footer/>
        </>
    )
}
export default FrontPage;