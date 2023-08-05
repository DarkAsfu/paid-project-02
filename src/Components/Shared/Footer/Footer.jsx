import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer-bg">
            <footer className="footer py-10 w-10/12 mx-auto text-white">
               
                <div>
                    <span className="footer-title">Quick Access</span>
                    <Link to="/"  className="link link-hover">Home</Link>
                    <Link to="/contact"  className="link link-hover">Contact</Link>
                    <Link to="/login"  className="link link-hover">Login</Link>
                    <Link to="/register"  className="link link-hover">Sign Up</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
            <section>
                <p className='text-white text-center py-4'>© 2023 Royal Cpa | All Rights Reserved | Powered by RoyalCpa</p>
            </section>
        </div>
    );
};

export default Footer;