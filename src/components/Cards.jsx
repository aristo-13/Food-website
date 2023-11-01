
function Cards() {
  return (
    <div className="max-w-full p-4 py-2 grid md:grid-cols-3 gap-6">
       <div className="rounded-xl relative">
         <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">We Deliver Deserts</p>
            <p className="px-2">24/7</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl p-2">Order Now</button>
         </div>
         <img className="max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
       </div>
       <div className="rounded-xl relative">
         <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">Delicious Foods</p>
            <p className="px-2">Added Daily</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl p-2">Order Now</button>
         </div>
         <img className="max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/3219483/pexels-photo-3219483.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
       </div>
       <div className="rounded-xl relative">
         <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">Tastes Different</p>
            <p className="px-2">Recommended</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl p-2">Order Now</button>
         </div>
         <img className="max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/2282532/pexels-photo-2282532.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
       </div>
    </div>
  )
}

export default Cards
