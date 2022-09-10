import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const port = 8000;
// const products = require('./routes/products.routes');
// const users = require('./routes/users.routes');

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use('/api', products);
// app.use('/api', users);
app.use((req, res) => {
  res.status(404).send({ message: 'Not found...' });
});

const NODE_ENV = process.env.NODE_ENV;
let dbUri = '';

if (NODE_ENV === 'production') dbUri = 'url to remote db';
else if (NODE_ENV === 'test') dbUri = 'mongodb://localhost:27017/mockProducts';
else dbUri = 'mongodb://localhost:27017/mockProducts';

mongoose.connect(dbUri);

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');
});
db.on('error', (err) => console.log('Error: ' + err));
