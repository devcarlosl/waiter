import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = 3001;

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is runing on http://localhost:${PORT}`);
    });
  })
  .catch(() => {
    console.log('Error connecting to mongodb');
  });


