import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config';
const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

app.use('/api/users', userRouter);

app.get('/', (req, res) => {
  res.send('API working');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});