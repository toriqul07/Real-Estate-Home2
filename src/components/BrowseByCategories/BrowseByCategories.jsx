import arrow from '../../assets/BrowseByCategories/Arrow.png';
import first from '../../assets/BrowseByCategories/first.png';
import second from '../../assets/BrowseByCategories/second.png';
import third from '../../assets/BrowseByCategories/third.png';

const BrowseByCategories = () => {
    return (
        <div className='mt-5'>
            <div className='flex items-center justify-between pl-40 pr-40'>
                <h1 className="font-bold text-2xl">Browse By Categories</h1>
                <img src={arrow} alt="" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 items-center pl-40 pr-40 pt-4'>
                    <div className='flex items-center gap-4'>
                        <img src={first} alt="" />
                        <div>
                            <h1 className='font-bold text-xl'>Appartment</h1>
                            <p>Lorem ipsum dolor sitam <br /> consectetur elit.</p>
                            <p>22 Property</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                    <img src={second} alt="" />
                        <div>
                            <h1 className='font-bold text-xl'>Duplex House</h1>
                            <p>Lorem ipsum dolor sitam <br /> consectetur elit.</p>
                            <p>25 Property</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                    <img src={third} alt="" />
                        <div>
                            <h1 className='font-bold text-xl'>Office</h1>
                            <p>Lorem ipsum dolor sitam <br /> consectetur elit.</p>
                            <p>30 Property</p>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default BrowseByCategories;