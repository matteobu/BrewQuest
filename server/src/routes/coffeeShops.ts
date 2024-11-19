import express, { Request, Response } from 'express';
import { createClient } from '@supabase/supabase-js';

const router = express.Router();

// Initialize Supabase client

const supabase = createClient(
  process.env.SUPABASE_URL || 'https://qkrmdpsgqtixomxiukdx.supabase.co',
  process.env.SUPABASE_KEY ||
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFrcm1kcHNncXRpeG9teGl1a2R4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMjAzNDc4OCwiZXhwIjoyMDQ3NjEwNzg4fQ.bgqi8pCf7BHC31wio1NpruYOLH-LJlrpj7YxE77ckzc'
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
