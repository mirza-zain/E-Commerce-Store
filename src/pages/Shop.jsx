import React from 'react';
import "../stylesheets/sho.css";
import product from '../pages/products.json'

const Shop = (props) => {
    return (
        <div className='container max-w-full h-svh bg-blue-500 relative'>
            <h2 className='text-3xl text-white font-["Oswald"] py-10 sticky left-[45%]'>Explore The Trends</h2>
            <div className='flex cursor-pointer absolute top-[20%] gap-3'>
                {product.map(products => (
                    <div key={products.id} className='bg-white w-[15%] h-[52%] py-2 px-2 border border-solid border-zinc-500 border-x-2 border-y-2 rounded-md'>
                        <div className='max-w-full'>
                            <img className='w-full h-full object-cover rounded-md' src={products.images[1]} alt={product.title} />
                        </div>
                        <div className='text-end py-4'>
                            <span className='text-zinc-500 text-end text-md font-semibold'>{products.title}</span>
                            {/* <h5 className='text-start text-green-500 font-bold'>{products.description}</h5> */}
                            <div className='text-yellow-400 flex flex-row mb-2'>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shop;