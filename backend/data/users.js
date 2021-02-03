import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'admin@ex.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Andrey',
    email: 'andy@ex.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Artem',
    email: 'artem@ex.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
