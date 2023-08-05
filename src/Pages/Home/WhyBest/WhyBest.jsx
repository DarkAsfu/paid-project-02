import icon1 from '../../../assets/hosting3-home-icon1.png'
import icon2 from '../../../assets/hosting3-home-icon2.png'
import icon3 from '../../../assets/hosting3-home-icon3.png'
const WhyBest = () => {
    return (
        <div className="bg-[#0C0834] py-20">
            <div className="w-10/12 mx-auto ">
                <h1 className="text-white text-3xl md:text-5xl font-bold text-center">Why <span className="text-[#6de0f6] border-b-4 border-[#d0098d]">We are Best?</span></h1>
                <div className='grid md:grid-cols-3 grid-cols-1 pt-32 gap-4'>
                    <div className='hover:border-t-2 py-2 border-cyan-500 transition-all'>
                        <div className='flex gap-4 items-center'>
                            <div>
                                <img className='w-48' src={icon1} alt="" />
                            </div>
                            <div className='text-white'>
                                <h1 className='text-md md:text-2xl mb-4'>Worldwide Coverage</h1>
                                <p className='text-xs md:text-[16px]'>With our collection of hundreds of high quality offers we can guarantee worldwide coverage.</p>
                            </div>
                        </div>
                    </div>
                    <div className='hover:border-t-2 py-2 border-cyan-500 transition-all'>
                        <div className='flex gap-4 items-center'>
                            <div>
                                <img className='w-40' src={icon2} alt="" />
                            </div>
                            <div className='text-white'>
                                <h1 className='text-md md:text-2xl mb-4'>Awesome Payment System<br/>Coverage</h1>
                                <p className='text-xs md:text-[16px]'>Our all affiliates get their payment on time after reaching their minimum limit.</p>
                            </div>
                        </div>
                    </div>
                    <div className='hover:border-t-2 py-2 border-cyan-500 transition-all'>
                        <div className='flex gap-5 items-center'>
                            <div>
                                <img className='w-56' src={icon3} alt="" />
                            </div>
                            <div className='text-white'>
                                <h1 className='text-md md:text-2xl mb-4'>Worldwide<br/>Coverage</h1>
                                <p className='text-xs md:text-[16px]'>We have the best support team for our all affiliates and always we try to give our best support for new affiliates</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyBest;