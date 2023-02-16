import Header from './common/Header';
import Footer from './common/Footer';
import PageHeader from './common/PageHeader';
import ContactContent from './contact/ContactContent';
function AboutPage(){
    return(
        <>
            <Header/>
            <PageHeader  pagetitle = 'Contact Us'/>
            <ContactContent/>
            <Footer/>
        </>
    )
}
export default AboutPage;