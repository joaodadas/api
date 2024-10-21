import { MongoClient } from 'mongodb';
import routes from './routes';

const express = require('express');
const body = require('body-parser');
const mongoose = require('mongoose');

async function start() {
  try {
    await mongoose.connect(
      'mongodb+srv://root:k4ZRfaG22kavi4N9@costumer.vif8z.mongodb.net/?retryWrites=true&w=majority&appName=Costumer'
    );

    const app = express();
    app.use(body.json());
    app.use('/api', routes);

    app.listen(3000, () => {
      console.log('Server running on 3000');
    });
  } catch (error) {
    console.log(error);
  }
}

start();
