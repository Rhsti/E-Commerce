import useProducts from '../hooks/useProducts'
function Shop() {
  const {products} = useProducts()
  console.log(products);
  
  return (
    <div>
      <h2>Shop</h2>
       
       
    </div>
  )
}

export default Shop