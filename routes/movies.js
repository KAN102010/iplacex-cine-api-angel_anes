    const express = require('express');
    const Movie = require('../models/Movie');
    const router = express.Router();

    router.get('/', async (req, res) => {
      const data = await Movie.find();
      res.json(data);
    });

    router.post('/', async (req, res) => {
      const created = await Movie.create(req.body);
      res.status(201).json(created);
    });

    router.get('/:id', async (req, res) => {
      const item = await Movie.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Not found' });
      res.json(item);
    });

    router.put('/:id', async (req, res) => {
      const updated = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updated) return res.status(404).json({ message: 'Not found' });
      res.json(updated);
    });

    router.delete('/:id', async (req, res) => {
      await Movie.findByIdAndDelete(req.params.id);
      res.status(204).send();
    });

    module.exports = router;
    