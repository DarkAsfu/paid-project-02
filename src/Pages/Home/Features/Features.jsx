import './Features.css'
import feature1 from '../../../assets/hosting3-home-image-11.png'
import feature2 from '../../../assets/hosting3-home-image-22.png'
import feature3 from '../../../assets/hosting3-home-image-33.png'
import { FaCheck } from "react-icons/fa";
const Features = () => {
    return (
        <div className='feature-bg bg-fixed'>
            <div className='w-10/12 mx-auto'>
                <div className='md:flex justify-between items-center'>
                    <div className='order-1 md:order-2'>
                        <img className='w-3/5' src={feature1} alt="" />
                    </div>
                    <div className='order-2 md:order-1'>
                        <h1 className='fbg1 pt-6 ps-14 text-xl md:text-4xl font-semibold uppercase'>Sign up and get:</h1>
                        <div className='ps-14'>
                            <p className='my-6 text-xs md:text-sm font-semibold'>
                                Net 30, Net 15, Net 7, even Net 0! You can choose when you get paid.<br/> Select your favorite payment method and we will send your payments like clockwork. Affiliate marketing made easy.</p>
                            <p className='text-sm md:text-xl font-bold mb-2'>Parameters: </p>
                            <ul className='text-sm md:text-[16px]'>
                                <li><FaCheck className='inline-block text-cyan-300'></FaCheck> Premium Payouts</li>
                                <li><FaCheck className='inline-block text-cyan-300'></FaCheck> Qualified Support</li>
                                <li><FaCheck className='inline-block text-cyan-300'></FaCheck> Fast payments</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='md:flex justify-between items-center my-20'>
                    <div className=''>
                        <img className='w-[500px]' src={feature2} alt="" />
                    </div>
                    <div className=''>
                        <h1 className='fbg2 pt-6 ps-14 text-xl md:text-4xl font-semibold'>DEDICATED ACCOUNT MANAGER</h1>
                        <div className='ps-14'>
                            <p className='mt-12 mb-6 font-medium text-xs md:text-sm'>
                            Need any help? No problem! Our dedicated managers will help<br/>you with any question you may have. Your priorities are our priorities and our <br/> goal is to help you monetize your traffic.</p>
                        
                        </div>
                    </div>
                </div>

                <div className='md:flex justify-between items-center'>
                    <div className='order-1 md:order-2'>
                        <img className='w-[500px]' src={feature3} alt="" />
                    </div>
                    <div className='order-2 md:order-1'>
                        <h1 className='fbg3 pt-6 ps-14 text-xl md:text-4xl font-semibold '>EXCLUSIVE TOP-CONVERTING OFFERS</h1>
                        <div className='ps-14'>
                            <p className='my-6 font-medium text-xs md:text-sm'>
                            Try our exclusive campaigns with the best brands online. We<br/>focus on conversion and we have the highest payout rates in the<br/>industry. What are you waiting for?</p>
                            <p className=' font-bold mb-2'>FLEXIBLE AND RELIABLE PAYMENTS</p>
                            <ul className='text-xs md:text-sm'>
                                <li><FaCheck className='inline-block text-cyan-300'></FaCheck> Net 30, Net 15, Net 7, even Net 0! You<br/>can choose when you get paid. Select your favorite payment method and we will send<br/>your payments like clockwork. Affiliate marketing made easy.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;