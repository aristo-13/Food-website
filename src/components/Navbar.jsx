import { FaCartPlus, FaGift, FaHamburger, FaHeart, FaQuestion, FaSearch,FaTag,FaThumbsUp,FaTimes,FaTruckMoving, FaUserFriends, FaWallet} from 'react-icons/fa'
import { useState } from 'react'

function Navbar() {
 const [nav,setNav] = useState(false)


  return (
    <div className='max-w-full flex justify-between p-3 items-center'>
        <div className='flex items-center gap-[1rem]'>
            <div className='cursor-pointer'>
               <FaHamburger size={30} onClick={() => setNav(!nav)}/>
            </div>
            <h2 className='text-[1.2rem]'>Best <span className='font-bold'>Eats</span></h2>
            <div className='hidden lg:flex items-center bg-gray-200 p-1 rounded-full cursor-pointer'>
                <p className='bg-black text-white p-1 rounded-full'>Delivery</p>
                <p>Pickup</p>
            </div>
        </div>

        <div className='bg-gray-200 w-[200px] sm:w-[400px] lg:w-[500px] flex items-center rounded-full p-2'>
            <FaSearch />
            <input className='bg-transparent w-full focus:outline-none' type="text" placeholder='search foods...' />
        </div>

        <div className='hidden bg-black text-white md:flex items-center py-2 rounded-xl px-2 gap-2'>
            <FaCartPlus size={20}/> Cart
        </div>



        {/* haburger */}
        {nav && <div className='bg-black/80 w-full h-screen fixed top-0 left-0 z-10 duration-300 transition-all duration-300'>
             
        </div>}
        <div className={nav ? 'bg-white w-[min(100%,300px)] h-screen fixed top-0 left-0 z-10 duration-300' : 'bg-white w-[300px] h-screen fixed top-0 left-[-1000%] z-10 duration-300'}>
                <FaTimes size={20} className='absolute right-4 top-4 cursor-pointer' onClick={() => setNav(!nav)}/>
                <h2 className='text-2xl p-3'>Best <span className='font-bold'>Eats</span></h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        <li className='text-xl py-4 flex items-center'><FaTruckMoving className='size={20}  mr-4' /> Orders</li>
                        <li className='text-xl py-4 flex items-center'><FaHeart className='size={20}  mr-4' /> Favorite</li>
                        <li className='text-xl py-4 flex items-center'><FaWallet className='size={20}  mr-4' /> Wallet</li>
                        <li className='text-xl py-4 flex items-center'><FaQuestion className='size={20}  mr-4' /> Help</li>
                        <li className='text-xl py-4 flex items-center'><FaTag className='size={20}  mr-4' /> Promotions</li>
                        <li className='text-xl py-4 flex items-center'><FaThumbsUp className='size={20}  mr-4' /> Best Ones</li>
                        <li className='text-xl py-4 flex items-center'><FaUserFriends className='size={20}  mr-4' /> Invite Friends</li>
                    </ul>
                </nav>
             </div>
    </div>
  )
}

export default Navbar
