import Category from '../components/Category';
import Header from '../components/Header';
import useProducts from '../hooks/useProducts';
function Home() {
const { products} = useProducts();  
return (
 <>
       {/* header */}
   <Header/>
    
    {/* main */}
   <main >
    <Category products={products}/>
    
    {/* <div>
       <ul>
      {products.map((product) => (
<li key={product.id}>{product.title}</li>
      ))}
     </ul>
    </div> */}
    </main>
    </>
  )
}

export default Home