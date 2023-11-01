

function Hero() {
  return (
    <div className="w-full p-4">
       <div className="max-h-[500px] relative rounded-xl overflow-hidden">
          <div className=" bg-black/50 absolute w-full text-gray-200 bottom-0 h-full flex flex-col justify-center backdrop-blur-[1px]">
            <h1 className="px-4 text-xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">The <span className="text-orange-600">Best</span></h1>
            <h1 className="px-4 text-xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"><span className="text-orange-600">Foods </span>Delivered</h1>
          </div>
          <img className=' w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="//" />
       </div>
    </div>
  )
}

export default Hero
