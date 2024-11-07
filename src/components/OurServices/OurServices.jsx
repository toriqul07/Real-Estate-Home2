
import arrow from '../../assets/OurServices/Arrow.png';
import first from '../../assets/OurServices/first.png';
import second from '../../assets/OurServices/second.png';
import third from '../../assets/OurServices/third.png';
import icon from '../../assets/OurServices/icon.png';

const OurServices = () => {
    return (
        <div className="pl-40 pr-40 pt-4">
            <h2 className="text-2xl font-bold underline">Our Services</h2>
            <div className='flex items-center justify-between'>
                <h2 className="text-4xl font-bold">Our Main Focus</h2>
                <img src={arrow} alt="" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 pt-4'>
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src={first}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <div className='flex items-center gap-2'>
                            <img src={icon} alt="" />
                            <h2 className="card-title">Buy a property</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisin
                        cing elit sed do eiusmod tempor incididunt utlrul labore et dolore magna aliqua. </p>
                        <button className="btn btn-outline btn-warning">Find a home</button>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src={second}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <div className='flex items-center gap-2'>
                            <img src={icon} alt="" />
                            <h2 className="card-title">Buy a property</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisin
                        cing elit sed do eiusmod tempor incididunt utlrul labore et dolore magna aliqua. </p>
                        <button className="btn btn-outline btn-warning">Find a home</button>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src={third}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <div className='flex items-center gap-2'>
                            <img src={icon} alt="" />
                            <h2 className="card-title">Buy a property</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisin
                        cing elit sed do eiusmod tempor incididunt utlrul labore et dolore magna aliqua. </p>
                        <button className="btn btn-outline btn-warning">Find a home</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;