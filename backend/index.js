import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const router = express.Router();

// Endpoint do tworzenia nowej książki
router.post('/', async (req, res) => {
  try {
    const { title, author, pages } = req.body;
    const newBook = new Book({ title, author, pages });
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint do pobierania wszystkich książek
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint do aktualizacji danych książki
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pages } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(id, { title, author, pages }, { new: true });
    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint do usuwania książki
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Book.findByIdAndDelete(id);
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
