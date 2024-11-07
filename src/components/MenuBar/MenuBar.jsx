
import vec from '../../assets/menuBarImgae/Vector.png';

const MenuBar = () => {
    return (
        <div className="bg-[#F8FAFA]">
            <div className="navbar bg-base-100 border-2 pl-12 pr-12">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a className='text-[#FF5017] text-xl'>Home</a></li>
                            <li><a className='text-[#010F58] text-xl'>About Us</a></li>
                            <li><a className='text-[#010F58] text-xl'>Property</a></li>
                            <li><a className='text-[#010F58] text-xl'>Pages</a></li>
                            <li><a className='text-[#010F58] text-xl'>Blog</a></li>
                            <li><a className='text-[#010F58] text-xl'>Contact</a></li>
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <img src={vec} alt="" />
                        <a className="text-xl">Kavinax</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a className='text-[#FF5017] text-xl underline'>Home</a></li>
                        <li><a className='text-[#010F58] text-xl'>About Us</a></li>
                        <li><a className='text-[#010F58] text-xl'>Property</a></li>
                        <li><a className='text-[#010F58] text-xl'>Pages</a></li>
                        <li><a className='text-[#010F58] text-xl'>Blog</a></li>
                        <li><a className='text-[#010F58] text-xl'>Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-4">
                    <span>Sign In</span>
                    <button className="btn btn-secondary">Add Property</button>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;