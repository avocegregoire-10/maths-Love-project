import {Link} from "react-router-dom";
import formImage from "../images/img/form-image.png";
import googleIcon from "../images/svg/google-icon.svg";

function Register () {
    return (
        <div className="register-page">
            <div class="form-page-header"> 
                <div class="container">
                    <nav class="navbar py-3 navbar-expand-lg d-flex justify-content-between"><a class="navbar-brand" href="index.html">
                        {/*<!-- header logo -->*/}
                        <svg class="header-logo" xmlns="http://www.w3.org/2000/svg" width="128" height="39" viewBox="0 0 128 39">
                            <g transform="translate(0 8)">
                                <circle cx="14" cy="14" r="14" fill="#f56962"></circle>
                                <path d="M8.124,0a8.124,8.124,0,0,1,8.124,8.124c0,2.167,4.182,7.153,4.182,7.153s-9.986.971-12.306.971A8.124,8.124,0,0,1,8.124,0Z" transform="translate(5.57 6)" fill="#fff"></path>
                                <text transform="translate(34 21)" font-size="0.8em" font-family="Poppins-Medium, Poppins" font-weight="500" letter-spacing="0.01em">
                                    <tspan x="0" y="0">Math'sLove </tspan>
                                </text>
                            </g>
                        </svg></a>
                        <div class="d-flex align-items-center"><span class="nav-link p-0 d-none d-sm-block">Already have an account?</span>
                                {/*<!-- header register button-->*/}
                            <Link to="/accueil" className="btn btn-primary ms-4">Accueil</Link>
                            <Link to="/login" className="btn btn-primary ms-4">Login</Link>
                            <Link to="/student" className="btn btn-primary ms-4">Student</Link>
                            {/*<a class="btn btn-primary ms-4" href="login.html">Log in</a>*/}
                        </div>
                    </nav>
                </div>
            </div>
            <section class="form-page login-form-page">
                <div class="login-form-page-content d-flex">
                    <div class="form-page-left form-page-half text-center">
                        <div class="form-page-left-img"><img src={formImage} alt="Image Description" /></div>
                        <div class="form-page-left-content mt-4">    
                            <h2 class="banner-heading text-white mb-3">Turn your ambition into a success story</h2>
                            <p class="banner-brief text-white">Choose from over 100,000 online video.</p>
                        </div>
                    </div>
                    <div class="form-page-right form-page-half">
                        <div class="form-page-right-content"> 
                            <h2 class="sec-heading">Create your free account</h2>
                            <p class="sec-brief">See how the world’s best user experiences are created</p>
                            <form class="login-form mt-5" action="courses.html">
                                <div class="form-group">
                                    <label class="form-label text-primary" for="fullName">Full name</label>
                                    <input class="form-control" id="fullName" type="text" placeholder="Your name" required />
                                </div>
                                <div class="form-group mt-4">
                                    <label class="form-label text-primary" for="exampleFormControlInput1">Email address</label>
                                    <input class="form-control" id="exampleFormControlInput1" type="email" placeholder="Exampl@email.com" required />
                                </div>
                                <div class="form-group mt-4"> 
                                    <div class="d-flex justify-content-between">
                                        <label class="form-label text-primary d-flex" for="inputPassword5">Password</label>
                                        <button class="forgot-password">Forgot Password</button>
                                    </div>
                                    <div class="password-wrap position-relative">
                                        <input class="form-control pe-5" id="inputPassword5" type="password" placeholder="Enter password" required />
                                        <button id="showPassword" type="button"></button>
                                    </div>
                                </div>
                                <button class="btn btn-primary w-100 mt-5 submit-btn" type="submit">Start now !</button>
                                <div class="divider d-flex align-items-center my-4"> <span class="divider-line bg-dark"></span><span class="mx-3 span-or text-secondary">OR</span><span class="divider-line bg-dark"></span></div>
                                <button class="btn btn-outline-secondary goolge-signin w-100 submit-btn" type="button"> <img class="me-3" src={googleIcon} alt="Image Description" />Start now !</button><span class="card-text mt-5 d-block">By signing up, you agree to our communications and usage terms Already have an account?  {/*<a class="text-focus" href="login.html"> Sign in</a>*/} <Link to="/login" className="text-focus" > Sign in</Link></span>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Register;