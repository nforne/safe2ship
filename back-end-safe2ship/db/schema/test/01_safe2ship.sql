-- Drop and recreate Users table (Example)

-- DROP TABLE IF EXISTS users CASCADE;
-- CREATE TABLE users (
--   id SERIAL PRIMARY KEY NOT NULL,
--   name VARCHAR(255) NOT NULL
-- );


DROP DATABASE IF EXISTS safe2ship;

CREATE DATABASE safe2ship;
\c safe2ship

-- //------------------------------------------------------------- --
DROP TABLE IF EXISTS shippers CASCADE;

CREATE TABLE shippers(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  photo TEXT,
  address VARCHAR(255),
  number_of_orders INTEGER,
  number_of_packages INTEGER,
  rating_sum INTEGER,
  bio TEXT,
  ccard_info VARCHAR(255),
  company_information TEXT,
  driving_record TEXT,
  photo_id TEXT,
  status VARCHAR(20) DEFAULT 'shipper',
  total_declined INTEGER,
  system_id VARCHAR(10),
  web_link TEXT,
  work_schedule TEXT,
  time_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  time_updated TIMESTAMP DEFAULT NOW()
);

-- //------------------------------------------------------------- --
DROP TABLE IF EXISTS customers CASCADE;

CREATE TABLE customers(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  photo TEXT,
  address VARCHAR(255),
  number_of_packeges INTEGER,
  rating_sum INTEGER,
  bio TEXT,
  ccard_info TEXT,
  company_information TEXT,
  photo_id TEXT, 
  status VARCHAR(20) DEFAULT 'customer',
  total_declined INTEGER,
  system_id VARCHAR(10),
  web_link VARCHAR(255),
  time_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  time_updated TIMESTAMP DEFAULT NOW()
);


-- //------------------------------------------------------------- --
DROP TABLE IF EXISTS packages CASCADE;

CREATE TABLE packages(
  id SERIAL PRIMARY KEY NOT NULL,
  customer_id INTEGER REFERENCES customers(id) ON DELETE CASCADE,
  size INTEGER,
  weight DOUBLE PRECISION,
  description TEXT,
  source TEXT,
  destination TEXT,
  delivery_deadline TIMESTAMP,
  status VARCHAR(128),
  price INTEGER,
  messages TEXT,
  time_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  time_updated TIMESTAMP DEFAULT NOW()
);

-- //------------------------------------------------------------- --
DROP TABLE IF EXISTS orders CASCADE;

CREATE TABLE orders(
  id SERIAL PRIMARY KEY NOT NULL,
  customer_id INTEGER REFERENCES customers(id) ON DELETE CASCADE,
  shipper_id INTEGER REFERENCES shippers(id) ON DELETE CASCADE,
  package_id INTEGER REFERENCES packages(id) ON DELETE CASCADE,
  map TEXT, 
  status VARCHAR (128),
  time_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  time_updated TIMESTAMP DEFAULT NOW()
);