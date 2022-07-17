import { faker } from '@faker-js/faker';

// Config Data;
const dataSize: number = 500;
const minAge: number = 18;
const maxAge: number = 60;

// Mock Data Generator
export type user = {
  id: number;
  name: string;
  age: number;
};

const users: user[] = [];

[...Array(dataSize).keys()].map((i) => {
  users.push({
    id: i + 1,
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    age: faker.datatype.number({ min: minAge, max: maxAge })
  });

  return users;
});

// Testing Data extraction directly, before using MobX
/*
type GraphData = {
  [key: string]: number;
};

type AgeGroup = {
  [key: string]: string[];
};

const graphData: GraphData = {};
const ageGroup: AgeGroup = {};

users.forEach((user: user) => {
  // extracting graphData
  if (graphData[user.age]) {
    graphData[user.age]++;
  } else {
    graphData[user.age] = 1;
  }

  // extracting ageGroup data
  if (ageGroup[user.age]) {
    ageGroup[user.age].push(user.name);
  } else {
    ageGroup[user.age] = [user.name];
  }
});

console.log('user', users);
console.log('gD:', graphData);
console.log('ageGroup:', ageGroup);
*/

// eslint-disable-next-line no-console
console.log('users', users);

export default users;
