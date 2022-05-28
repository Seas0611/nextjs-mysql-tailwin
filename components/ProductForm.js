import axios from 'axios';
import { useState } from "react";
import { useRouter } from 'next/router';

export function ProductForm() {

    const [product, setProduct] = useState({
        name:"",
        description:"",
        price:""
    })

    const router = useRouter();

    const handleChange = ({target:{name,value}}) => {
        setProduct({ ...product,[name]:value});
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const res = await axios.post('/api/products',product);
        router.push('/');
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" onChange={handleChange} />

                <label htmlFor="name">Price: </label>
                <input type="text" name="price" onChange={handleChange}/>

                <label htmlFor="name">Description: </label>
                <textarea name="description" rows="2" onChange={handleChange}></textarea>
                <button>Save Product</button>
            </form>
        </div>
    )
}