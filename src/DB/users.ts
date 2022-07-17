// Mock data Generator

import { faker } from '@faker-js/faker';

export type user = {
  id: number;
  name: string;
  age: number;
};

const users: user[] = [];

// age between 15 and 65;
[...Array(500).keys()].map((i) => {
  users.push({
    id: i + 1,
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    age: faker.datatype.number({ min: 15, max: 30 })
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

export default users;
