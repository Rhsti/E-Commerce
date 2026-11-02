import { useState } from 'react';
import Category from '../components/Category';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import useProducts from '../hooks/useProducts';
function Home() {
const { products} = useProducts();  
 
const [selectedCategory,setSelectedCategory] = useState('all');

const productFilter = 
selectedCategory === 'all' ? 
products : products.filter((product) => product.category === selectedCategory)
return (
 <>
       {/* header */}
   <Header/>
    
    {/* main */}
   <main >
    <Category products={products} setSelectedCategory={setSelectedCategory}/>

    {/* ProductList */}
    <ProductList productFilter={productFilter} setSelectedCategory={setSelectedCategory}/>
   
    
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