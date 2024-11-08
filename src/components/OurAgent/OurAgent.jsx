import one from '../../assets/OurAgent/one.png';
import two from '../../assets/OurAgent/two.png';
import three from '../../assets/OurAgent/three.png';

const OurAgent = () => {
    return (
        <div className="mt-4">
            <h2 className="text-center underline font-semibold text-2xl pb-2">Our Agents</h2>
            <h2 className="text-center font-bold text-3xl pb-2">Meet Our Agents</h2>
            <div className="pl-40 pr-40 pt-4">
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 pt-4'>
                    <div className="card bg-base-100 shadow-xl">
                        <figure>
                            <img
                                src={one}
                                alt="Shoes" />
                        </figure>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure>
                            <img
                                src={two}
                                alt="Shoes" />
                        </figure>

                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure>
                            <img
                                src={three}
                                alt="Shoes" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurAgent;