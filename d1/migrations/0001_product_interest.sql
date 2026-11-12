CREATE TABLE IF NOT EXISTS product_interest (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  product_id TEXT NOT NULL CHECK (product_id IN ('latte', 'matcha', 'protein', 'shake')),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL COLLATE NOCASE,
  country TEXT NOT NULL,
  notes TEXT,
  language TEXT NOT NULL CHECK (language IN ('en', 'sr')),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (email, product_id)
);
