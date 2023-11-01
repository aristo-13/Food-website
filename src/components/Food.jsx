import { Data } from "../../data/data"


function Food() {
    console.log(Data)
  return (
    <div>
      <h1>Top Rated Menu Items</h1>
      <div>
        <div>
            <p>Filter Type</p>
            <div>
                <button>All</button>
                <button>Burgers</button>
                <button>Pizza</button>
                <button>Salad</button>
                <button>Chicken</button>
            </div>
        </div>
        <div>
            <p>Filter Price</p>
            <div>
                <button>$</button>
                <button>$$</button>
                <button>$$$</button>
                <button>$$$$</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Food
