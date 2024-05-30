import React, { useState, useEffect } from 'react';
import "../stylesheets/sho.css";
import axios from 'axios';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const API_URL = '/api';
        const API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImExNjA0MTRmYWMyMTI3Nzc1N2I2OWFlNjRjZDY5YTJkNmFiMWQyM2Y4OTQyZWFmNWVmZTllYzk1YTI2ZTUwOTJiZTk5ZWU1MjgxYTE0ZGJjIiwiaWF0IjoxNzE2NzUwMjEwLjU3MTAxOSwibmJmIjoxNzE2NzUwMjEwLjU3MTAyMiwiZXhwIjoxNzQ4Mjg2MjEwLjU2NDcxNCwic3ViIjoiMTc4NTQ2MjYiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AbQkMFR6o1husaEYbGw1GK4zv-F6vP2-rZtSpPGwVRKA68GNv7D2gWUscwwUxl7zuqZ2prtmqpO9FsVkWoE'; // Replace with your actual API key
        const Shop_ID = '15449454';

        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${API_URL}/v1/shops/${Shop_ID}/products`, {
                    headers: {
                        Authorization: `Bearer ${API_KEY}`,
                    },
                });
                setProducts(response.data.products);
            } catch (error) {
                console.error('Error fetching products:', error.message);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className='container max-w-full h-svh bg-blue-500 relative'>
            <h2 className='text-3xl text-white font-["Oswald"] py-10 sticky left-[45%]'>Explore The Trends</h2>
            <div className='flex cursor-pointer absolute top-[20%] gap-3'>
                {products.map(product => (
                    <div key={product.id} className='bg-white w-[15%] h-[52%] py-2 px-2 border border-solid border-zinc-500 border-x-2 border-y-2 rounded-md'>
                        <div className='max-w-full'>
                            <img className='w-full h-full object-cover rounded-md' src={product.image} alt={product.title} />
                        </div>
                        <div className='text-end py-4'>
                            <span className='text-zinc-500 text-end text-md font-semibold'>{product.title}</span>
                            <h5 className='text-start text-green-500 font-bold'>{product.description}</h5>
                            <div className='text-yellow-400 flex flex-row mb-2'>
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