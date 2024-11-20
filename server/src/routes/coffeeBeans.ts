import express from 'express';
import { fetchDataFromTable } from '../services/supabaseService';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await fetchDataFromTable('coffee_beans');
    res.status(200).json(data);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
});

export default router;
