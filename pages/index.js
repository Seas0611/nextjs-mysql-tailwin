import { ProductForm } from '../components/ProductForm.js';
import { Layout } from "../components/Layout.js";
import Link from "next/link";
import axios from 'axios';

function HomePage({products}) {
  //console.log(products);
  return (
      <Layout>
          {products.map(product =>(
            <Link href={`/products/${product.id}`} key={product.id}>
            <a>
              <div className="border border-gray-200">
                <h1>{product.name}</h1>
                <h2>{product.description}</h2>
                <h3>{product.price}</h3>
              </div>
            </a>
            </Link>
          ))}
      </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const { data : products} = await axios.get('http://localhost:3000/api/products');
  //console.log(products);
  return{
    props: {
      products
    }
  }
}

export default HomePage