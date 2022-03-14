import {Link} from "react-router-dom";
import formImage from "../images/img/form-image.png";
import googleIcon from "../images/svg/google-icon.svg";


function Login() {
    return (
        <div className="login-page">
            <div className="form-page-header"> 
                <div className="container">
                    <nav className="navbar py-3 navbar-expand-lg d-flex justify-content-between"><a className="navbar-brand" href="index.html">

                            {/*<!-- header logo -->*/}
                        <svg className="header-logo" xmlns="http://www.w3.org/2000/svg" width="128" height="39" viewBox="0 0 128 39">
                            <g transform="translate(0 8)">
                                <circle cx="14" cy="14" r="14" fill="#f56962"></circle>
                                <path d="M8.124,0a8.124,8.124,0,0,1,8.124,8.124c0,2.167,4.182,7.153,4.182,7.153s-9.986.971-12.306.971A8.124,8.124,0,0,1,8.124,0Z" transform="translate(5.57 6)" fill="#fff"></path>
                                <text transform="translate(34 21)" font-size="0.8em" font-family="Poppins-Medium, Poppins" font-weight="500" letter-spacing="0.01em">
                                    <tspan x="0" y="0">Math'sLove</tspan>
                                </text>
                            </g>
                        </svg></a>
                        <div className="d-flex align-items-center"><span className="nav-link p-0 d-none d-sm-block">Don’t have an account?</span>

                                {/*<!-- header register button-->*/}
                                <Link to="/register" className="btn btn-primary ms-4">Register</Link>
                                <Link to="/accueil" className="btn btn-primary ms-4">Accueil</Link>
                            {/*<a className="btn btn-primary ms-4" href="register.html">Register</a>*/}
                        </div>
                    </nav>
                </div>
            </div>
            <section className="form-page login-form-page">
                <div className="login-form-page-content d-flex">
                    <div className="form-page-left form-page-half text-center">
                        <div className="form-page-left-img"><img src={formImage} alt="Image Description"></img></div>
                        <div className="form-page-left-content mt-4">    
                            <h2 className="banner-heading text-white mb-3">Turn your ambition into a success story</h2>
                            <p className="banner-brief text-white">Choose from over 100,000 online video.</p>
                        </div>
                    </div>
                    <div className="form-page-right form-page-half">
                        <div className="form-page-right-content"> 
                            <h2 className="sec-heading">Hello ! Welcome back.</h2>
                            <p className="sec-brief">Log in with your data that you entered during Your registration.</p>
                            <form className="login-form mt-5" action="courses.html">
                                <div className="form-group">
                                    <label className="form-label text-primary" for="exampleFormControlInput1">Email address</label>
                                    <input className="form-control" id="exampleFormControlInput1" type="email" placeholder="Exampl@email.com" required></input>
                                </div>
                                <div className="form-group mt-4"> 
                                    <div className="d-flex justify-content-between">
                                        <label className="form-label text-primary d-flex" for="inputPassword5">Password</label>
                                        <button className="forgot-password">Forgot Password</button>
                                    </div>
                                    <div className="password-wrap position-relative">
                                        <input className="form-control pe-5" id="inputPassword5" type="password" placeholder="Enter password" required></input>
                                        <button id="showPassword" type="button"></button>
                                    </div>
                                </div>
                            </form>
                            <button className="btn btn-primary w-100 mt-5 submit-btn" type="submit">Start now !</button>
                            <div className="divider d-flex align-items-center my-4"> <span className="divider-line bg-dark"></span><span className="mx-3 span-or text-secondary">OR</span><span className="divider-line bg-dark"></span></div>
                            <button className="btn btn-outline-secondary goolge-signin w-100 submit-btn" type="button"> <img className="me-3" src={googleIcon} alt="Image Description"></img>Start now !</button>Don’t have an account?  
                            {/*<a href="#">Sign up</a> */}
                            <Link to="/register" className="text-focus">Sign up</Link>
                        </div>
                    </div>
                </div>   
            </section>
        </div>
    );
}

export default Login;