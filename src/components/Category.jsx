
function Category({products}) {
const  categories = [
     { name: "Women", value: "women" },
    { name: "Men", value: "men" },
    { name: "Kids", value: "kids" }
]
  return (
    <section className=" py-6  text-center">
     <h2 className="text-4xl italic  font-medium">Shop by Category</h2>  
     <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 md:px-17">
      {categories.map(category => {
        const product = products.find((item) => item.category === category.value);
        return (
          <div key={category.value} className="relative">
             <img   className="w-full h-30 object-cover rounded-xl" src={product?.image} alt={product?.title} />
          <div className="absolute bottom-5 left-5 text-white">
                <h3 className="text-2xl font-bold">
                  {category.name}
                </h3>
         </div>
        
          </div>
        )
}    )}
    </div>  
    </section>
  )
}

export default Category