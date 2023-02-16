function Member(props){
    const data = props.members;
    // const path = 'img/';
    return(
        <>
        {data.map((item) => (
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                    <img className="img-fluid" src={item.picture} alt=""/>
                </div>
                <div className="team-text bg-light text-center p-4">
                    <h5>{item.name}</h5>
                    <p className="text-primary">{item.company}</p>
                    <div className="team-social text-center">
                    {item.socialLinks.map((links) => {
                        return <>
                            <a className="btn btn-square" href={links.facebook}><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square" href={links.email}><i className="fas fa-envelope-open"></i></a>
                            <a className="btn btn-square" href={links.phone}><i className="fab fa-whatsapp"></i></a>
                            </>
                    })}
                    </div>
                </div>
            </div>
        </div>
           
        ))}
        </>
    )
}
export default Member;