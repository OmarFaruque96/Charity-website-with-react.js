function PageHeader(){
    return(
        <>
            <div class="container-fluid page-header mb-0 wow fadeIn" data-wow-delay="0.1s">
                <div class="container text-center">
                    <h1 class="display-4 text-white animated slideInDown mb-4">Donate</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb justify-content-center mb-0">
                            <li class="breadcrumb-item"><a class="text-white" href="#h">Home</a></li>
                            <li class="breadcrumb-item"><a class="text-white" href="#h">Pages</a></li>
                            <li class="breadcrumb-item text-primary active" aria-current="page">Donate</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </>
    )
}
export default PageHeader;