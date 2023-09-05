const { faker } = require("@faker-js/faker");

const makeUser = () => ({
  id: faker.datatype.uuid(),
  name: faker.person.firstName(),
  lastname: faker.person.lastName(),
  dni: faker.number.int({ min: 6000000, max: 35000000 }).toString(),
  year: faker.number.int({ min: 15, max: 65 }),
  createdAt: faker.date.past(),
  updateAt: faker.date.past(),
  deletedAt: null,
});

const db = Array.from({ length: 10 }).map((_) => makeUser());

module.exports = db;
