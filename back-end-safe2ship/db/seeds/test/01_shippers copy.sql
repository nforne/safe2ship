-- password = 2020

INSERT INTO
shippers(
  name ,
  phone ,
  email ,
  password ,
  photo ,
  address ,
  number_of_orders ,
  number_of_packages ,
  rating_sum ,
  bio ,
  ccard_info ,
  company_information ,
  driving_record ,
  total_declined ,
  system_id 
)
VALUES
  (
    'John Doe',
    '4165551847',
    'johndoe@example.com',
    '$2a$10$gLOuK89SbIaJcphI76XYROCUVP66U2I238kPYsQp3AKNZ0LqwVjAW',
    'https://www.jdl.co.uk/wp-content/uploads/2016/10/avatar-m.png',
    '1234 Main Street E',
    10,
    5,
    40,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    '[{}]',
    'Company LLC',
    '[{}]',
    1,
    '14f538e91G'
  ),
  (
    'Jane Foster',
    '4165551847',
    'johndoe@example.com',
    '$2a$10$gLOuK89SbIaJcphI76XYROCUVP66U2I238kPYsQp3AKNZ0LqwVjAW',
    'https://socoshaping.com/wp-content/uploads/2019/02/unknown-woman.png',
    '1234 Main Street E',
    10,
    5,
    40,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    '[{}]',
    'Company LLC',
    '[{}]',
    1,
    '14fA38e91G'
  ),
  (
    'Alex Fisher',
    '4165551847',
    'johndoe@example.com',
    '$2a$10$gLOuK89SbIaJcphI76XYROCUVP66U2I238kPYsQp3AKNZ0LqwVjAW',
    'https://www.jdl.co.uk/wp-content/uploads/2016/10/avatar-m.png',
    '1234 Main Street E',
    10,
    5,
    40,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    '[{}]',
    'Company LLC',
    '[{}]',
    1,
    '14f53Be91G'
  );