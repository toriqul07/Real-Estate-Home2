import location from '../../assets/topBarImage/location.png';
import email from '../../assets/topBarImage/Email.png';
import phone from '../../assets/topBarImage/Phone.png';
import facebook from '../../assets/topBarImage/Facebook.png';
import instagram from '../../assets/topBarImage/instagram.png';
import twiter from '../../assets/topBarImage/Twitter.png';
import linkedin from '../../assets/topBarImage/Linkdin.png';
import youtube from '../../assets/topBarImage/Youtube.png';

const TopBar = () => {
    return (
        <div className="bg-[#010F58] mx-auto h-[90px] pt-4">
            <div className='flex items-center justify-between'>
                <div className='flex gap-4 items-center pl-12'>
                    <img src={location} alt="" />
                    <h4 className='text-[16px] font-normal leading-[21.86px] text-left font-manrope text-white'>7124 Landmark Tower,New York</h4>
                    <img src={email} alt="" />
                    <h4 className='text-[16px] font-normal leading-[21.86px] text-left font-manrope text-white'>support@yourdomain.com</h4>
                    <img src={phone} alt="" />
                    <h4 className='text-[16px] font-normal leading-[21.86px] text-left font-manrope text-white'>+61383766284</h4>
                </div>
                <div className='flex items-center gap-4 pr-12'>
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={twiter} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={youtube} alt="" />
                </div>
            </div>
        </div>
    );
};

export default TopBar;