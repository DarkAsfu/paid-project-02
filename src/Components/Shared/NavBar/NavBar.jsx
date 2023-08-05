import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="bg-[#0C0834]">
            <header>
                <div className="relative z-20 border-b md:w-10/12 mx-auto">
                    <div className="px-6 md:px-12 lg:container lg:mx-auto lg:px-6 lg:py-4">
                        <div className="flex items-center justify-between">
                            <div className="relative z-20">
                                <Link to="/">
                                    <h1 className="text-white text-3xl font-bold"><span className="text-cyan-600">R</span>oyalCpa Network</h1>
                                </Link>
                            </div>

                            <div className="flex items-center justify-end border-l lg:border-l-0 ">
                                <input type="checkbox" name="hamburger" id="hamburger" className="peer" hidden />
                                <label for="hamburger" className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden ">
                                    <div aria-hidden="true" className="m-auto h-0.5 w-6 rounded bg-white transition duration-300"></div>
                                    <div aria-hidden="true" className="m-auto mt-2 h-0.5 w-6 rounded bg-white transition duration-300"></div>
                                </label>

                                <div className="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%]  border-r shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0 bg-[#0C0834]">
                                    <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                                        <ul className="px-6 pt-32 text-white space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0">
                                            <li>
                                                <Link to='/' className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-1 before:origin-right before:scale-x-0 before:bg-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                                                    <span className="relative ">Home</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/contact' className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-1 before:origin-right before:scale-x-0 before:bg-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                                                    <span className="relative ">Contact</span>
                                                </Link>
                                            </li>
                                        </ul>

                                        <div className="border-t py-8 px-6 md:px-12 md:py-16 lg:border-t-0 lg:border-l lg:py-0 lg:pr-0 lg:pl-6">
                                            <Link to="/login" className="block px-6 py-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-400 text-center text-white">
                                                Sign In
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default NavBar;

{/* <li><Link to='/'>Home</Link></li>
<li><Link to="/about">About</Link></li>
<li><Link to="/contact">Contact</Link></li>
<li><Link to="/faqs">Faqs</Link></li> */}