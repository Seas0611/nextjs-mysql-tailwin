import React from 'react'

const handleSubmit = e =>{
    e.preventDefault();
    console.log('OK');
}


export function ProductForm() {
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" />

                <label htmlFor="name">Price: </label>
                <input type="text" name="price" />

                <label htmlFor="name">Description: </label>
                <textarea name="description" rows="2"></textarea>
                <button>Save Product</button>
            </form>
        </div>
    )
}