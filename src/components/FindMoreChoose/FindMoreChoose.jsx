import image from '../../assets/FindMoreChoose/image.png';
import tikmark from '../../assets/FindMoreChoose/tikmark.png';
import explore from '../../assets/FindMoreChoose/explore.png';
const FindMoreChoose = () => {
    return (
        <div className='flex gap-6 mt-6 pl-40 pr-40'>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h4 className='text-3xl font-bold underline pb-4'>Find More Choose</h4>
                <h1 className='text-4xl font-bold pb-4'>Why You Choose Our Kavinax Property</h1>
                <p className='pb-4 text-xl'>Excepteur sint occaecat cupidatat non proident,sunt inculpk qui officia deserunt mollit anim id est laborum.sed do eiusmod.</p>
                <div className='flex items-center gap-2 pb-2'>
                    <div className='flex items-center gap-2 pb-2'>
                        <img src={tikmark} alt="" />
                        <h5 className='text-xl'>Outstanding property</h5>
                    </div>
                    <div className='flex items-center gap-2 pb-2'>
                        <img src={tikmark} alt="" />
                        <h5 className='text-xl'>Provide the best services for users</h5>
                    </div>
                </div>
                <div className='flex items-center gap-2 pb-2'>
                    <div className='flex items-center gap-2 pb-2'>
                        <img src={tikmark} alt="" />
                        <h5 className='text-xl'>Modern city location & ecceptional lifestyle</h5>
                    </div>
                    <div className='flex items-center gap-2 pb-2'>
                        <img src={tikmark} alt="" />
                        <h5 className='text-xl'>Professional & experienced human resources</h5>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={explore} alt="" />
                </div>

            </div>
        </div>
    );
};

export default FindMoreChoose;