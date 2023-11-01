import { Data } from "../../data/data"
import { useState } from "react"


function Food() {
const [foods,setFoods] = useState(Data)


   /*  console.log(Data) */
  return (
    <div className="w-full p-4 py-12">
      <h1 className="text-orange-600 font-bold text-3xl text-center">Top Rated Menu Items</h1>
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
            <p className="font-bold text-gray-700">Filter Type</p>
            <div className="flex justify-between flex-wrap">
                <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">All</button>
                <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Burgers</button>
                <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Pizza</button>
                <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Salad</button>
                <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Chicken</button>
            </div>
        </div>
        <div>
            <p className="font-bold text-gray-700">Filter Price</p>
            <div className="flex justify-between max-w-[390px] w-full">
                <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$</button>
                <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$</button>
                <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$$</button>
                <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$$$</button>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {
          foods.map((food,index) =>(
            <div key={index} className="border shadow-lg rounded-lg hover:scale-105 duration-300 cursor-pointer">
                <img className="w-full h-[200px] object-cover rounded-t-lg" src={food.image} alt={food.name} />
                <div className="flex justify-between px-2 py-4">
                    <p className="font-bold">{food.name}</p>
                    <p>
                        <span className="bg-orange-500 text-white p-1 rounded-full">{food.price}</span>
                    </p>
                </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Food
