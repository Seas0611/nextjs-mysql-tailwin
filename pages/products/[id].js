import axios from 'axios';
import { Layout } from '../../components/Layout'
import { useRouter } from 'next/router';

function ProductView({product}) {

    const router = useRouter();

    const handleDelete = async (id) => {
        const res = await axios.delete('/api/products/' + id);
        router.push('/');
    }

    return (
        <Layout>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            <p>{product.description}</p>

            <button className="bg-red-500 hover:bg-red-700 text-white px-3 py-2" onClick={() => handleDelete(product.id)}>
                Delete
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white px-3 py-2" onClick={() => router.push('/products/edit/'+product.id)}>
                Edit
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