import Header from './common/Header';
import Footer from './common/Footer';
import Donate from './donate/Donate';
import PageHeader from './common/PageHeader';
function CausesPage(){
    return(
        <>
            <Header/>
            <PageHeader pagetitle = 'Donate'/>
            <Donate/>
            <Footer/>
        </>
    )
}
export default CausesPage;