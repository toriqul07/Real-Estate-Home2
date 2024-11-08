import one from '../../assets/OurCity/one.png';
import two from '../../assets/OurCity/two.png';
import Sqft1 from '../../assets/OurCity/Sqft1.png';
import Sqft from '../../assets/OurCity/Sqft.png';
import star from '../../assets/OurCity/star.png';
import redSqft from '../../assets/OurCity/redSqft.png';
import arrow from '../../assets/OurCity/Arrow.png';

const OurCity = () => {
    return (
        <div className="pl-40 pr-40 pt-4">
            <h2 className="text-2xl font-bold underline">Find Propertices</h2>
            <div className='flex items-center justify-between'>
                <h2 className="text-4xl font-bold">Explore Our Cities</h2>
                <img src={arrow} alt="" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 pt-4'>
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src={one}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <div className='flex items-center gap-2'>
                            {/* <img src={icon} alt="" /> */}
                            <div>
                                <h2 className="card-title text-[#FF5017]">Fortune Condo Town</h2>
                                <img src={star} alt="" />
                            </div>
                            <img src={Sqft1} alt="" />
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src={two}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <div className='flex items-center gap-2'>
                            {/* <img src={icon} alt="" /> */}
                            <div>
                                <h2 className="card-title">Buy a property</h2>
                                <img src={redSqft} alt="" />
                            </div>
                            <img src={Sqft} alt="" />
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src={one}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <div className='flex items-center gap-2'>
                            <div className='flex items-center gap-2'>
                                {/* <img src={icon} alt="" /> */}
                                <div>
                                    <h2 className="card-title">Buy a property</h2>
                                    <img src={redSqft} alt="" />
                                </div>
                                <img src={Sqft} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurCity;