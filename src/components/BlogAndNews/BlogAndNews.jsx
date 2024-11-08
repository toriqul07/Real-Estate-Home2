import arrow from '../../assets/BlogAndNews/Arrow.png';
import one from '../../assets/BlogAndNews/one.png';
import two from '../../assets/BlogAndNews/two.png';
import three from '../../assets/BlogAndNews/three.png';
import eye from '../../assets/BlogAndNews/eye.png';
import comment from '../../assets/BlogAndNews/comment.png';
import plus from '../../assets/BlogAndNews/plus.png';
import keybord from '../../assets/BlogAndNews/keybord.png';
import time from '../../assets/BlogAndNews/Time-Circle.png';
import small from '../../assets/BlogAndNews/small.png';
const BlogAndNews = () => {
    return (
        <div className="pl-40 pr-40 pt-4">
            <div className='flex items-center justify-between'>
                <div>
                    <h2 className="text-2xl font-semibold underline">Find Propertices</h2>
                    <h1 className="text-3xl font-bold">Our Latest Blog & News</h1>
                </div>
                <img src={arrow} alt="" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src={one}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <div className='flex items-center gap-8'>
                            <div className='flex items-center gap-4'>
                                <img src={keybord} alt="" />
                                <small>05 Dec 2022</small>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src={eye} alt="" />
                                <small>1000</small>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src={comment} alt="" />
                                <small>12 comments</small>
                            </div>
                        </div>
                        <p className='text-[#FF5017] underline font-semibold text-xl'>7 home trends that will shape your house</p>
                        <p>Duis aute irure dolor in reprehenderit into volupjl
                            tate velit esse cillum dolore eu fugiat nulla partr
                            iatur sunt in culp qui officia deserunt mollit</p>
                            <hr />
                         <div className='flex items-center gap-8'>
                            <div className='flex items-center gap-4'>
                                <img src={small} alt="" />
                                <small>David Smith</small>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src={time} alt="" />
                                <small>2 minutes ago</small>
                            </div>
                         </div>
                         <hr />
                        <div className="flex items-center justify-between">
                            <h4 className='text-[#FF5017]'>Read More</h4>
                            <img src={plus} alt="" />
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src={two}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <div className='flex items-center gap-8'>
                            <div className='flex items-center gap-4'>
                                <img src={keybord} alt="" />
                                <small>06 Dec 2022</small>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src={eye} alt="" />
                                <small>2000</small>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src={comment} alt="" />
                                <small>13 comments</small>
                            </div>
                        </div>
                        <p className='text-[#FF5017] underline font-semibold text-xl'>Renovating a Living Room? Experts Share Their Secrets</p>
                        <p>Duis aute irure dolor in reprehenderit into volupjl
                            tate velit esse cillum dolore eu fugiat nulla partr
                            iatur sunt in culp qui officia deserunt mollit</p>
                            <hr />
                         <div className='flex items-center gap-8'>
                            <div className='flex items-center gap-4'>
                                <img src={small} alt="" />
                                <small>John Doe</small>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src={time} alt="" />
                                <small>3 minutes ago</small>
                            </div>
                         </div>
                         <hr />
                        <div className="flex items-center justify-between">
                            <h4 className='text-[#FF5017]'>Read More</h4>
                            <img src={plus} alt="" />
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src={three}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <div className='flex items-center gap-8'>
                            <div className='flex items-center gap-4'>
                                <img src={keybord} alt="" />
                                <small>07 Dec 2022</small>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src={eye} alt="" />
                                <small>3000</small>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src={comment} alt="" />
                                <small>14 comments</small>
                            </div>
                        </div>
                        <p className='text-[#FF5017] underline font-semibold text-xl'>Recent Commercial Real Estate Transactions</p>
                        <p>Duis aute irure dolor in reprehenderit into volupjl
                            tate velit esse cillum dolore eu fugiat nulla partr
                            iatur sunt in culp qui officia deserunt mollit</p>
                            <hr />
                         <div className='flex items-center gap-8'>
                            <div className='flex items-center gap-4'>
                                <img src={small} alt="" />
                                <small>William Seklo</small>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src={time} alt="" />
                                <small>4 minutes ago</small>
                            </div>
                         </div>
                         <hr />
                        <div className="flex items-center justify-between">
                            <h4 className='text-[#FF5017]'>Read More</h4>
                            <img src={plus} alt="" />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default BlogAndNews;