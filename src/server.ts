import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

import productsRouters from './routes/products.routes';
import usersRouters from './routes/users.routes';

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/products', productsRouters);
app.use('/api/users', usersRouters);
