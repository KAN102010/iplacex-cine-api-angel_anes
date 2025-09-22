    const express = require('express');
    const mongoose = require('mongoose');
    const morgan = require('morgan');
    const cors = require('cors');

    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(morgan('dev'));

    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/cine';
    const PORT = process.env.PORT || 3000;

    mongoose.connect(MONGODB_URI)
      .then(() => console.log('MongoDB connected'))
      .catch(err => console.error('MongoDB error', err));

    app.get('/', (req, res) => res.json({ ok: true, service: 'cine-api' }));

    const moviesRouter = require('./routes/movies');
    app.use('/api/movies', moviesRouter);

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    