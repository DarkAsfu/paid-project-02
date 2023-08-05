import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className="bg-[#0C0834] py-20">
            <div className='w-10/12 mx-auto md:flex items-center'>
                <div className="order-1 md:order-2 ">
                    <Player
                        autoplay
                        loop
                        mode="normal"
                        src="https://lottie.host/a42a26d1-10ca-4da3-bafe-ed77c363b369/NfiifhYJQU.json"
                        style={{ width: "100%" }}
                    >
                    </Player>
                </div>
                <div className='order-2 md:order-1'>
                    <h1 className='text-white text-3xl md:text-5xl'><span className='text-[#6DE0F6]'>Performence Marketing</span><br />
                        that achieves your Goals
                    </h1>
                    <p className='text-white py-8'>Access exclusive tools and the high converting offer in multiple verticlas!</p>
                    <div className='flex gap-4'>
                        <Link to="/register"><button className='btn bg-gradient-to-r from-sky-600 to-cyan-400 border-0 text-white'>SignUp Now</button></Link>
                        <Link to="/login"><button className='btn text-sky-500'>Login</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;