import { ProductForm } from '../components/ProductForm.js';
import { Layout } from "../components/Layout.js"
import axios from 'axios';

function HomePage({products}) {
  console.log(products);
  return (
      <Layout>
        <ProductForm/>
          {products.map(product =>(
            <div key={product.id}>
              <h1>{product.name}</h1>
              <h2>{product.description}</h2>
              <h3>{product.price}</h3>
            </div>
          ))}
      </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const { data : products} = await axios.get('http://localhost:3000/api/products');
  //console.log(context);
  return{
    props: {
      products
    }
  }
}

export default HomePage