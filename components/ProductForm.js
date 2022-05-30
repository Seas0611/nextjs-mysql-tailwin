import axios from 'axios';
import { useState } from "react";
import { useEffect } from 'react';
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

        if(router.query.id){
            const res = await axios.put('/api/products/'+router.query.id, product);
        }else{
            const res = await axios.post('/api/products',product);
        }
        
        router.push('/');
    }

    useEffect(()=>{
        //console.log('acceso a use_effect');
        const getProduct =async () =>{
            const { data } =await axios.get('/api/products/'+router.query.id);
            setProduct({name: data.name,description: data.description,price: data.price});
        }
        if(router.query.id){
            console.log('queryid : '+router.query.id);
            getProduct(router.query.id)
        }
    },[])

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" onChange={handleChange}  value={product.name}/>

                <label htmlFor="price">Price: </label>
                <input type="text" name="price" onChange={handleChange} value={product.price}/>

                <label htmlFor="description">Description: </label>
                <textarea name="description" rows="2" onChange={handleChange} value={product.description}></textarea>
                <button>
                    {router.query.id ? "Update Product" : "Save Product"}
                </button>
            </form>
        </div>
    )
}