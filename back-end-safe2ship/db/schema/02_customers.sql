DROP TABLE IF EXISTS customers CASCADE;

CREATE TABLE customers(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255),
  image_url TEXT,
  number_of_orders INTEGER,
  customer_rating_sum INTEGER,
  bio TEXT,
  company_information TEXT,
  total_declined INTEGER,
  status VARCHAR(20) DEFAULT 'customer',
  system_id VARCHAR(10),
  time_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  time_updated TIMESTAMP
);