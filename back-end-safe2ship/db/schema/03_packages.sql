DROP TABLE IF EXISTS packages CASCADE;

CREATE TABLE packages(
  id SERIAL PRIMARY KEY NOT NULL,
  customer_id INTEGER REFERENCES customers(id) ON DELETE CASCADE,
  size INTEGER,
  weight DOUBLE PRECISION,
  description TEXT,
  source TEXT,
  destination TEXT,
  status VARCHAR (128),
  price_cents INTEGER,
  delivery_deadline TIMESTAMP,
  time_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  time_updated TIMESTAMP
);