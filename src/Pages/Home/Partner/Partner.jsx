import { Link } from "react-router-dom";
import aff1 from '../../../assets/affliate.png'
import aff2 from '../../../assets/aff.png'
const Partner = () => {
    return (
        <div className="w-10/12 mx-auto my-10">
            <h1 className="text-2xl md:text-4xl font-bold capitalize text-[#0A0541]">Our Trusted partner</h1>
            <div className="flex gap-8">
                <Link><img className="w-[325px]" src={aff1} alt="" /></Link>
                <Link><img className="w-[205px]" src={aff2} alt="" /></Link>
            </div>
        </div>
    );
};

export default Partner;