import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req: Request, res: Response) => {
  res.send('Server is running with TypeScript!');
});

// Start the server
const PORT = 5858;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🤘`);
});
