import Header from './common/Header';
import Footer from './common/Footer';
import PageHeader from './common/PageHeader';
import AboutContent from './about/AboutContent';
function AboutPage(){
    return(
        <>
            <Header/>
            <PageHeader
            pagetitle = 'About Us'
            />
            <AboutContent/>
            <Footer/>
        </>
    )
}
export default AboutPage;