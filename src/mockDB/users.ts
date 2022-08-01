import { faker } from '@faker-js/faker';

// Config Data;
const dataSize: number = 500;
const minAge: number = 18;
const maxAge: number = 40;

// Mock Data Generator
export type user = {
  id: number;
  name: string;
  age: number;
};

const users: user[] = [...Array(dataSize).keys()].map((i) => ({
  id: i + 1,
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  age: faker.datatype.number({ min: minAge, max: maxAge })
}));

// eslint-disable-next-line no-console
console.log('users', users);

export default users;
