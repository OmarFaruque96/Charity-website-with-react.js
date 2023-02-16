import Member from './Member';
import data from '../../db/members.json';
function Team(){
   
    return(

        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp mw-500" data-wow-delay="0.1s">
                    <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">Team Members</div>
                    <h1 className="display-6 mb-5">Let's Meet With Our Ordinary Soldiers</h1>
                </div>
                <div className="row g-4">
                    <Member members = {data} />
                </div>
            </div>
        </div>
    )
}
export default Team;