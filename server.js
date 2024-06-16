const express = require('express');
const dotenv = require('dotenv');
const { sequelize } = require('./models');
const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/category');

dotenv.config();

const app = express();

app.use(express.json());

app.use('/products', productRoutes);  
app.use('/categories', categoryRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await sequelize.authenticate();
    console.log('Database connected!');
});
