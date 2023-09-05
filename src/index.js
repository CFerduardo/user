const uuid = require("uuid");
const db = require("./database");

// const usuarios = {
//     id:
//     name:
//     lastname:
//     dni:
//     year:
//     createdAt:
//     deletedAt:
//     updateAt:
// }

const createUser = ({
  id,
  name,
  lastname,
  dni,
  year,
  createdAt,
  deletedAt,
  updateAt,
}) => {
  const newUser = {
    id: id ?? uuid.v4(),
    name,
    lastname,
    dni,
    year,
    createdAt: createdAt ?? new Date(),
    deletedAt: deletedAt ?? null,
    updateAt: updateAt ?? new Date(),
  };
  db.push(newUser);
  return newUser;
};

const getAll = () => db;

const deleteUser = (id) => (db = db.filter((user) => user.id !== id));

const getById = (id) => db.find((user) => user.id === id);

const updateUser = (id, partialUser) => {
  const user = getById(id);

  if (!user) {
    console.log("user not found");
    return;
  }

  const userUpdated = {
    ...user,
    ...partialUser,
  };

  deleteUser(id);

  db.push(userUpdated);

  return userUpdated;
};

function main() {
  createUser({
    id: "123",
    name: "hola",
    lastname: "hola2",
    year: 85,
    dni: true,
  });

  console.log(getById("123"));
}

main();
