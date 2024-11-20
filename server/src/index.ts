import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
import coffeeShopsRouter from './routes/coffeeShops';
import coffeeBeansRouter from './routes/coffeeBeans';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req: Request, res: Response) => {
  res.send('Server is running with TypeScript!');
});

app.use('/api/coffee-shops', coffeeShopsRouter);
app.use('/api/coffee-beans', coffeeBeansRouter);

// Start the server
const PORT = 5858;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🤘`);
});
