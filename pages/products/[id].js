import axios from 'axios';
import { Layout } from '../../components/Layout'

function ProductView({product}) {

    const handleDelete = async (id) => {
        const res = await axios.delete('/api/products/' + id);
        console.log(res);
    }

    return (
        <Layout>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            <p>{product.description}</p>

            <button className="bg-red-500 hover:bg-red-700 text-white px-3 py-2" onClick={() => handleDelete(product.id)}>
                delete
            </button>

        </Layout>
    );
}

export const getServerSideProps = async (context) => {
    const idweb = context.query.id;
    const urlapi = "http://localhost:3000/api/products/"+idweb;
    const { data: product } = await axios.get(urlapi);
    return{
        props:{
            product,
        },
    };
};

export default ProductView;