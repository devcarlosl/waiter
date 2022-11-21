import mongoose from 'mongoose';

import { app } from './app';

const PORT = 3001;

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(() => {
    console.log('Error connecting to mongodb');
  });
