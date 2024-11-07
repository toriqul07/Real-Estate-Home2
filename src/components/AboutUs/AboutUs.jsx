import ceo from '../../assets/AboutUs/ceo.png';
import explore from '../../assets/AboutUs/explore.png';
import image from '../../assets/AboutUs/image.png';
import tikmark from '../../assets/AboutUs/tikMark.png';

const AboutUs = () => {
    return (
        <div className='flex gap-6 mt-6 pl-40 pr-40'>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h4 className='text-3xl font-bold underline pb-4'>About us</h4>
                <h1 className='text-4xl font-bold pb-4'>We Specialize In Quality
                    Home Renovations</h1>
                <p className='pb-4 text-xl'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat <br /> nulla pariatur Excepteur sint occaecat cupidatat non proident, sunt in culpa <br /> qui officia deserunt mollit anim id est laborum.</p>
                <div className='flex items-center gap-2 pb-2'>
                    <img src={tikmark} alt="" />
                    <h5 className='text-xl'>Outstanding property</h5>
                </div>
                <div className='flex items-center gap-2 pb-2'>
                    <img src={tikmark} alt="" />
                    <h5 className='text-xl'>Provide the best services for users</h5>
                </div>
                <div className='flex items-center gap-2 pb-2'>
                    <img src={tikmark} alt="" />
                    <h5 className='text-xl'>Modern city location & ecceptional lifestyle</h5>
                </div>
                <div className='flex items-center gap-2 pb-2'>
                    <img src={tikmark} alt="" />
                    <h5 className='text-xl'>Professional & experienced human resources</h5>
                </div>
                <p className='pb-4 text-xl'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia <br /> consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                <div className='flex items-center gap-2'>
                    <img src={explore} alt="" />
                    <img src={ceo} alt="" />
                </div>

            </div>
        </div>
    );
};

export default AboutUs;