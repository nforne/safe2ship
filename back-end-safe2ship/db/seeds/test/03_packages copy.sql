INSERT INTO packages(
  customer_id ,
  size ,
  weight ,
  description ,
  source ,
  destination ,
  delivery_deadline ,
  status ,
  price ,
  messages 
)
VALUES
  (
    1,
    5,
    2.5,
    'small box',
    '123 Montgomery Street',
    '3 Roselawn Drive',
    NOW() + '20 minutes',
    'ready',
    498,
    '{per inceptos hymenaeos. Mauris ut quam}'
  ),
  (
    2,
    15,
    .0,
    'medium box',
    '123 Montgomery Street',
    '3 Roselawn Drive',
    NOW() + '40 minutes',
    'ready',
    897,
    '{per inceptos hymenaeos. Mauris ut quam}'
  ),
  (
    3,
    25,
    8.0,
    'large box',
    '123 Montgomery Street',
    '3 Roselawn Drive',
    NOW() + '50 minutes',
    'ready',
    1223,
    '{per inceptos hymenaeos. Mauris ut quam}'
  ),
  (
    2,
    20,
    2.0,
    'small bag',
    '123 Montgomery Street',
    '3 Roselawn Drive',
    NOW() + '60 minutes',
    'ready',
    597,
    '{per inceptos hymenaeos. Mauris ut quam}'
  ),
  (
    1,
    30,
    22,
    'custom',
    '123 Montgomery Street',
    '3 Roselawn Drive',
    NOW() + '120 minutes',
    'ready',
    2256,
    '{per inceptos hymenaeos. Mauris ut quam}'
  );
  