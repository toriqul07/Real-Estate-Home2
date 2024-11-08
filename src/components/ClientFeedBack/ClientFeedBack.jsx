import one from '../../assets/ClientFeedBack/one.png';
import two from '../../assets/ClientFeedBack/two.png';
import three from '../../assets/ClientFeedBack/three.png';
import redSqft from '../../assets/ClientFeedBack/redSqft.png';

const ClientFeedBack = () => {
    return (
        <div className="mt-4">
            <h2 className="text-center underline font-semibold text-2xl pb-2">Testimonials</h2>
            <h2 className="text-center font-bold text-3xl pb-2">Clients Feedback</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 pl-40 pr-40'>
                <div className="card bg-base-100 shadow-xl">
                    <figure className='flex items-center justify-between gap-4'>
                        <img
                            src={one}
                            alt="Shoes" />
                            <img src={redSqft} alt="" />
                    </figure>
                    <h4>Dramatically supply transparent deliverab before & you backward comp internal or "organic" sources.</h4>
                    <h1 className='font-bold text-2xl'>Courtney Henry</h1>
                    <h4 className='text-xl text-[#FF5017]'>Sr. UX/UI Designer</h4>
                    
                </div>
                <div className="card bg-base-100 shadow-xl">
                <figure className='flex items-center justify-between gap-4'>
                        <img
                            src={two}
                            alt="Shoes" />
                            <img src={redSqft} alt="" />
                    </figure>
                    <h4>Dramatically supply transparent deliverab before & you backward comp internal or "organic" sources.</h4>
                    <h1 className='font-bold text-2xl'>Leslie Alexander</h1>
                    <h4 className='text-xl text-[#FF5017]'>Bank Of America</h4>
                </div>
                <div className="card bg-base-100 shadow-xl">
                <figure className='flex items-center justify-between gap-4'>
                        <img
                            src={three}
                            alt="Shoes" />
                            <img src={redSqft} alt="" />
                    </figure>
                    <h4>Dramatically supply transparent deliverab before & you backward comp internal or "organic" sources.</h4>
                    <h1 className='font-bold text-2xl'>Madge Marvin</h1>
                    <h4 className='text-xl text-[#FF5017]'>Web Developer</h4>
                </div>
            </div>
        </div>
    );
};

export default ClientFeedBack;