import express, { Request, Response } from 'express';
import { createClient } from '@supabase/supabase-js';

const router = express.Router();

// Initialize Supabase client

const supabase = createClient(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_KEY || ''
);

// Get all coffee shops
router.get('/', async (req: any, res: any) => {
  try {
    const { data, error } = await supabase.from('coffee_shops').select('*');
    if (error) {
      console.error('Supabase Error:', error.message);
      return res.status(500).json({ error: error.message });
    }

    // Respond with the fetched coffee shops data
    res.status(200).json(data);
  } catch (err: any) {
    console.error('Unexpected Error:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
