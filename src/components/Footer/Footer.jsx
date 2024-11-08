import vector from '../../assets/Footer/Vector.png';
import facebook from '../../assets/Footer/Facebook.png';
import instagram from '../../assets/Footer/instagram.png';
import twiteer from '../../assets/Footer/Twitter.png';
import youtube from '../../assets/Footer/Youtube.png';
import linkedin from '../../assets/Footer/Linkdin.png';
import red from '../../assets/Footer/red.png';
import white from '../../assets/Footer/white.png';
import one from '../../assets/Footer/one.png';
import two from '../../assets/Footer/two.png';
import three from '../../assets/Footer/three.png';
import four from '../../assets/Footer/four.png';
import phone from '../../assets/Footer/Phone.png'
import email from '../../assets/Footer/Email.png'
import location from '../../assets/Footer/location.png'

const Footer = () => {
    return (
        <div className='bg-[#010F58] p-10 mt-4'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pl-40 pr-40 gap-20">
                <div>
                    <div className='flex items-center gap-4'>
                        <img src={vector} alt="" />
                        <h4 className='text-white font-semibold'>Kavinax</h4>
                    </div>
                    <p className='text-white pt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    <div className='flex items-center gap-1 pt-1'>
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                        <img src={twiteer} alt="" />
                        <img src={linkedin} alt="" />
                        <img src={youtube} alt="" />
                    </div>
                </div>
                <div className='pl-8'>
                    <h2 className='underline text-white font-semibold text-xl pb-4'>Quick Links</h2>
                    <div className='flex items-center gap-4'>
                        <img src={red} alt="" />
                        <h4 className='text-[#FF5017] pb-4'>About Us</h4>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img src={white} alt="" />
                        <h4 className='text-white  pb-4'>About Us</h4>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img src={white} alt="" />
                        <h4 className='text-white  pb-4'>About Us</h4>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img src={white} alt="" />
                        <h4 className='text-white  pb-4'>About Us</h4>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img src={white} alt="" />
                        <h4 className='text-white  pb-4'>About Us</h4>
                    </div>

                </div>
                <div>
                    <h2 className='underline text-white font-semibold text-xl pb-4'>Recent Post</h2>
                    <div className='flex items-center gap-3'>
                        <img src={one} alt="" />
                        <img src={two} alt="" />
                    </div>
                    <div className='flex items-center gap-3'>
                        <img src={three} alt="" />
                        <img src={four} alt="" />
                    </div>

                </div>
                <div>
                    <h2 className='underline text-white font-semibold text-xl pb-4'>Contact Us</h2>
                    <div className='flex items-center gap-3'>
                        <img src={phone} alt="" />
                        <div>
                            <h4 className='text-white'>Phone </h4>
                            <h4 className='text-white pb-3'>+44 (0) 20 9994 7740</h4>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img src={email} alt="" />
                        <div>
                            <h4 className='text-white'>Email </h4>
                            <h4 className='text-white pb-3'>support@yourdomain.com</h4>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img src={location} alt="" />
                        <div>
                            <h4 className='text-white'>Address </h4>
                            <h4 className='text-white pb-3'>7124 Landmark Tower,New York</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;