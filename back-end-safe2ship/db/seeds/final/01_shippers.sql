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
    'John Maslow',
    '4165551847',
    'johnmaslow@gmail.com',
    '$2a$10$gLOuK89SbIaJcphI76XYROCUVP66U2I238kPYsQp3AKNZ0LqwVjAW',
    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    '1245 Sherbourne Street, Toronto, ON',
    10,
    5,
    40,
    'Hey, I am John. I am an outdoors enthusiast. You can catch me at a scenic hiking trails, which is how I spend most of my free time!',
    '[{}]',
    'N/A',
    '[{}]',
    1,
    '14f538e91G'
  ),
  (
    'Jane Foster',
    '4165336578',
    'jane@gmail.com',
    '$2a$10$gLOuK89SbIaJcphI76XYROCUVP66U2I238kPYsQp3AKNZ0LqwVjAW',
    'https://p0.pikrepo.com/preview/97/708/woman-in-black-v-neck-shirt-smiling-thumbnail.jpg',
    '11 Rochester Drive, Toronto, ON',
    34,
    34,
    40,
    'Hi, I am Jane. I am just trying to pay my way through school!',
    '[{}]',
    'N/A',
    '[{}]',
    1,
    '14fA38e91G'
  ),
  (
    'Alex Fisher',
    '4165551847',
    'afisher@gmail.com',
    '$2a$10$gLOuK89SbIaJcphI76XYROCUVP66U2I238kPYsQp3AKNZ0LqwVjAW',
    'https://avatarfiles.alphacoders.com/151/thumb-1920-151639.jpg',
    '2257 Britannia Street East, Mississauga, ON',
    20,
    18,
    40,
    'Hello, I am Alex. I absolutely love cats! That is a picture of my cat, Fluffykins. Say Meow!',
    '[{}]',
    'N/A',
    '[{}]',
    1,
    '14f53Be91G'
  );