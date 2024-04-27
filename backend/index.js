import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

// Połączenie z bazą danych MongoDB
mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Dodanie middleware do obsługi danych w formacie JSON
app.use(express.json());

// Dodanie middleware do obsługi żądań z różnych źródeł (CORS)
app.use(cors());

// Funkcja middleware do logowania żądań HTTP
const loggerMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// Dodanie middleware do routera
app.use(loggerMiddleware);

// Dodanie routera dla książek
app.use('/books', booksRoute);

// Serwer nasłuchujący na podanym porcie
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
