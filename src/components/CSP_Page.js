import Header from './common/Header';
import Footer from './common/Footer';
import PageHeader from './common/PageHeader';
import CSP from './csp/CSP'
function CausesPage(){
    return(
        <>
            <Header/>
            <PageHeader  pagetitle = 'Child Sponsorship Program'/>
            <CSP/>
            <Footer/>
        </>
    )
}
export default CausesPage;