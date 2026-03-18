import { Pool } from 'pg'; // Use 'mysql2' if you are using MySQL

// This ensures we don't create a new connection every time the code runs
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = {
  query: (text: string, params?: any[]) => pool.query(text, params),
};