import { Link } from "react-router-dom";

function Accueil(){
    return (
        <div className="accueil-page">
            <div className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg"><a className="navbar-brand" href="index.html">
                    {/*<!-- header logo -->*/}
                        <svg className="header-logo" xmlns="http://www.w3.org/2000/svg" width="128" height="39" viewBox="0 0 128 39">
                            <g transform="translate(0 8)">
                                <circle cx="14" cy="14" r="14" fill="#f56962"></circle>
                                    <path d="M8.124,0a8.124,8.124,0,0,1,8.124,8.124c0,2.167,4.182,7.153,4.182,7.153s-9.986.971-12.306.971A8.124,8.124,0,0,1,8.124,0Z" transform="translate(5.57 6)" fill="#fff"></path>
                                        <text transform="translate(34 21)" font-size="0.8em" font-family="Poppins-Medium, Poppins" font-weight="500" letter-spacing="0.01em">
                                            <tspan x="0" y="0">Math'sLove</tspan>
                                        </text>
                            </g>
                        </svg>
                    </a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/*<!-- nav bar-->*/}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 rounded">
                            {/*<!-- nav-item-->*/}
                            <li className="nav-item dropdown mega-nav-item">
                                <button className="nav-link p-0 py-lg-0 py-2 dropdown-toggle d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Home<span className="dropdown-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24">
                                        <path className="header-svg-fill" d="M12,15.5a1,1,0,0,1-.71-.29l-4-4A1,1,0,0,1,8.71,9.79L12,13.1l3.3-3.18a1,1,0,1,1,1.38,1.44l-4,3.86A1,1,0,0,1,12,15.5Z"></path>
                                    </svg></span></button>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex align-items-center">
                        <a className="header-search-btn btn me-2" href="courses.html">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path className="header-svg-fill" d="M20.71,19.29l-3.4-3.39A7.92,7.92,0,0,0,19,11a8,8,0,1,0-8,8,7.92,7.92,0,0,0,4.9-1.69l3.39,3.4a1,1,0,1,0,1.42-1.42ZM5,11a6,6,0,1,1,6,6,6,6,0,0,1-6-6Z"></path>
                            </svg>
                        </a>
                        <a className="header-cart-btn mx-2" href="cart.html">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path className="header-svg-fill" d="M21.08,7a2,2,0,0,0-1.7-1H6.58L6,3.74A1,1,0,0,0,5,3H3A1,1,0,0,0,3,5H4.24L7,15.26A1,1,0,0,0,8,16h9a1,1,0,0,0,.89-.55l3.28-6.56A2,2,0,0,0,21.08,7Zm-4.7,7H8.76L7.13,8H19.38Z"></path>
                                <circle className="header-svg-fill" cx="1.5" cy="1.5" r="1.5" transform="translate(6 18)"></circle>
                                <circle className="header-svg-fill" cx="1.5" cy="1.5" r="1.5" transform="translate(16 18)"></circle>
                            </svg>
                        </a>


                        <button className="navbar-toggler ms-2 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"></button>
                        <Link to="/register" className="btn btn-primary d-none d-sm-block ms-4">Register</Link>
                        <Link to="/login" className="btn btn-primary d-none d-sm-block ms-4">Login</Link>
                        <Link to="/student" className="btn btn-primary d-none d-sm-block ms-4">Student</Link>
                        {/*<a className="btn btn-primary ms-4" href="login.html">Register</a>*/}
                    </div>
                </nav>
            </div>
        </div>
        <br /><br /><br /><br /><br /><br /><br />
        <div className="banner">
        <section clasSName="hero-banner pb-8 bg-primary index-banner position-relative">
        <div className="container"> 
          <div className="row align-items-center"> 
            <div className="col-md-7">
              <div className="banner-content text-center text-md-start"> 
                <h1 className="banner-heading">Learn more and make success the result of perfection.</h1>
                <p className="banner-brief text-secondary mt-3 my-md-4">Pick from over 100,000 online video courses with new additions published every month.</p>
                <form className="pt-1 py-5 pe-md-5" action="courses.html">
                  <div className="input-group index-banner-form banner-form">
                    <input className="index-banner-search form-control py-sm-3 py-2 px-sm-4 px-3 border-0" placeholder="Search your favourite course" name="srch-term" type="text" />
                    <button className="btn btn-primary" type="submit"><img src="images/svg/search-white.svg" alt="Image Description" /></button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-5 text-center text-md-end">
              <div className="index-banner-img pe-5 d-inline-block">
                <picture>
                  <source srcset="images/webp/girl-img-study.webp" type="image/webp" /><img src="images/img/girl-img-study.png" alt="Image Description" />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
        </div>
    );
}

export default Accueil;