import express from 'express';
import productsRouters from './routes/products.routes';
import usersRouters from './routes/users.routes';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/products', productsRouters);
app.use('/api/users', usersRouters);

app.listen(port, () => {
  console.log('Server running...');
});
