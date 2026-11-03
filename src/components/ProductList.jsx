import { FaArrowRight } from "react-icons/fa";

function ProductList({productFilter, setSelectedCategory}) {
    const products = productFilter.slice(0, 4)
  return (
    <section className="mt-10 mb-2 py-10 bg-gray-100 min-h-screen">
      <div className="flex flex-col md:flex-row 
      md:justify-around pt-4 items-center">
        <h2 className="text-3xl italic  font-medium">Featured Products</h2>
       <button  className="text-1xl font-medium text-blue-300" onClick={() => setSelectedCategory("all")}>
        Show all products <FaArrowRight className="inline"/>
        </button>
      </div>
      
       <div  className="grid grid-cols-1  xl:grid-cols-4 md:grid-cols-2 
       gap-6  md:pt-25 px-5 pt-20 ">

        {products.map((product) => (
            <div className=" bg-sky-100  w-full h-125
            rounded-2xl " >
            <img className="w-full h-80 object-cover 
             rounded-xl p-3 " src={product.image} alt={product.title} />
            <p className="pl-1 font-bold mb-1 text-2xl" key={product._id}>{product.title}</p>
             <p className="pl-1  mb-1 ">Rating {product.rating}</p>
             <p className="pl-1  mb-3 text-2xl font-bold  ">${product.price}</p>
             <div className="w-full px-4">

             <button className='bg-black rounded-2xl
              py-2 w-full text-white cursor-pointer '>Add to Cart</button>
            </div>
            </div>
        ))}
       </div>
      
    </section>
  )
}
export default ProductList;
