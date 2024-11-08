import Group from '../../assets/AllRightReserved/Group.png';
import Payments from '../../assets/AllRightReserved/Payments.png';

const AllRightReversed = () => {
    return (
        <div className='flex items-center justify-between bg-[#FF5017] pt-5 pb-5 pl-40 pr-40'>
            <div>
                <h3 className='text-white'>©2022 Kavinax Property. All Rights Reserved.</h3>
            </div>
            <div className='flex items-center gap-3'>
                <img src={Group} alt="" />
                <h4 className='text-white'>Secure Payments</h4>
                <img src={Payments} alt="" />
            </div>
        </div>
    );
};

export default AllRightReversed;