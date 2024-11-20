import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_KEY || ''
);

export const fetchDataFromTable = async (tableName: string) => {
  const { data, error } = await supabase.from(tableName).select('*');
  if (error) {
    throw new Error(`Error fetching data from ${tableName}: ${error.message}`);
  }
  return data;
};
