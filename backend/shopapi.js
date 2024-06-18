import express from 'express';
import axios from 'axios';
import fs from 'fs'; // Import the fs module

const port = process.env.PORT || 3000;
const app = express();
// const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const API_URL = 'https://api.printify.com';
const API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImExNjA0MTRmYWMyMTI3Nzc1N2I2OWFlNjRjZDY5YTJkNmFiMWQyM2Y4OTQyZWFmNWVmZTllYzk1YTI2ZTUwOTJiZTk5ZWU1MjgxYTE0ZGJjIiwiaWF0IjoxNzE2NzUwMjEwLjU3MTAxOSwibmJmIjoxNzE2NzUwMjEwLjU3MTAyMiwiZXhwIjoxNzQ4Mjg2MjEwLjU2NDcxNCwic3ViIjoiMTc4NTQ2MjYiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AbQkMFR6o1husaEYbGw1GK4zv-F6vP2-rZtSpPGwVRKA68GNv7D2gWUscwwUxl7zuqZ2prtmqpO9FsVkWoE'; // Use the correct environment variable
const shop_id = '15449454';

const getProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/v1/shops/${shop_id}/products.json`, {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
            },
        });
        const products = response.data;
        // Log product details
        products.data.forEach(product => {
            console.log('ID:', product.id);
            console.log('Title:', product.title);
            console.log('Description:', product.description);
        });
        return products; // Return the entire products object
    } catch (error) {
        console.error('Error fetching products:', error.message);
        return null; // Return null in case of error
    }
};

const getProduct = async () => {
    try {
        const products = await getProducts();

        if (!products) {
            console.error('Failed to fetch products');
            return;
        }

        // Stringify the data
        const dataToSave = JSON.stringify(products.data, null, 2); 

        // Write the data to a file
        fs.writeFile('products.json', dataToSave, (err) => {
            if (err) {
                console.error('Error writing file:', err);
            } else {
                console.log('Successfully wrote products to products.json');
            }
        });
    } catch (error) {
        console.error('Error processing products:', error.message);
    }
};

getProduct();

app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});
