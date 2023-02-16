import Header from './common/Header';
import Footer from './common/Footer';
import PageHeader from './common/PageHeader';
import Causes from './causes/Causes';
function CausesPage(){
    return(
        <>
            <Header/>
            <PageHeader
            pagetitle = 'Causes'
            />
            <Causes/>
            <Footer/>
        </>
    )
}
export default CausesPage;