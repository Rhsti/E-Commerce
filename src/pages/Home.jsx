import useProducts from '../hooks/useProducts';
function Home() {
const { products} = useProducts();  
return (
    <div >
     <ul>
      {products.map((product) => (
<li key={product.id}>{product.title}</li>
      ))}
     </ul>
    </div>
  )
}

export default Home