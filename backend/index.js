import express from 'express';
//import axios from 'axios';
// import dotenv from '/dotenv';
// dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
// const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// const API_URL = 'https://api.printify.com/v1';
// const API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImExNjA0MTRmYWMyMTI3Nzc1N2I2OWFlNjRjZDY5YTJkNmFiMWQyM2Y4OTQyZWFmNWVmZTllYzk1YTI2ZTUwOTJiZTk5ZWU1MjgxYTE0ZGJjIiwiaWF0IjoxNzE2NzUwMjEwLjU3MTAxOSwibmJmIjoxNzE2NzUwMjEwLjU3MTAyMiwiZXhwIjoxNzQ4Mjg2MjEwLjU2NDcxNCwic3ViIjoiMTc4NTQ2MjYiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AbQkMFR6o1husaEYbGw1GK4zv-F6vP2-rZtSpPGwVRKA68GNv7D2gWUscwwUxl7zuqZ2prtmqpO9FsVkWoE'; // Use the correct environment variable
// const Shop_ID = '15449454';

// const getProducts = async () => {
//     try {
//         const response = await axios.get(`${API_URL}/shops/blueprint/`, {
//             headers: {
//                 Authorization: `Bearer ${API_KEY}`,
//             },
//         });
//         const products = response.data;
// // console.log('Products:', products);
//     products.data.forEach(product => {
//         console.log('Title:', product.title);
//         console.log('Description:', product.description);
//         console.log('ID:', product.id);
//         console.log('Variants:', product.variants); // Access variants
//     });
//     } catch (error) {
//         console.error('Error fetching products:', error.message);
//     }
// };

// // const getProducts = async () => {
// //     try {
// //       const response = await axios.get(`${API_URL}/shop/${Shop_ID}/shops.json`, {
// //         headers: {
// //           Authorization: `Bearer ${API_KEY}`,
// //         },
// //       });
// //       const products = response.data;
// //       products.forEach((product) => {
// //         console.log('ID:', product.id);
// //         console.log('Title:', product.title);
// //         console.log('Description:', product.description);
// //         console.log('Price:', product.retail_price);
// //         console.log('---');
// //       });
// //     } catch (error) {
// //       console.error('Error fetching products:', error.message);
// //     }
// //   };
  
//   // Call the function
//   getProducts();
  

app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});
