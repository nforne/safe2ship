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
    'Small',
    '2.5 lbs',
    'Small box',
    '123 Montgomery Street, Toronto, ON',
    '3 Roselawn Drive, Scarborough, ON',
    NOW() + '20 minutes',
    'ready',
    498,
    '{The package is just a small box. You can pick it up outside by the door. Thanks!}'
  ),
  (
    2,
    'Medium',
    '15 lbs',
    'Medium box',
    '154 Rivers Street, Toronto, ON',
    '34 Horner Drive, Etobicoke, ON',
    NOW() + '40 minutes',
    'ready',
    897,
    '{}'
  ),
  (
    3,
    'Large',
    '35 lbs',
    'Large box with heavy materials inside',
    '98 Riverside Road, Vaughn, ON',
    '728 Yorkland Boulevard, North York, ON',
    NOW() + '50 minutes',
    'ready',
    1223,
    '{}'
  ),
  (
    2,
    'Small',
    '2.0 lbs',
    'small grocery bag',
    '154 Rivers Street, Toronto, ON',
    '25 Mississauga Drive, Mississauga, ON',
    NOW() + '60 minutes',
    'ready',
    797,
    '{Handle with care please.}'
  ),
  (
    4,
    'Large',
    '40 lbs',
    'Large tabletop in a box',
    '2345 Albert Road, Toronto, ON',
    '3 Lakeshore Boulevard, Toronto, ON',
    NOW() + '120 minutes',
    'ready',
    2256,
    '{Will need two to handle.}'
  ),
  (
    5,
    'Medium',
    '20 lbs',
    'Medium sized box. Need it moved to location by today please!',
    '1223 Forest Drive, Toronto, ON',
    '3 Intermission Road, Vaughn, ON',
    NOW() + '180 minutes',
    'ready',
    1679,
    '{Anytime today is fine.}'
  );
  