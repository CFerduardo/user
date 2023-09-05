const uuid = require("uuid");

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

let db = [];

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
  const newUser =
    (id ?? uuid.v4, name, lastname, dni, year, createdAt, deletedAt, updateAt);
  db.push(newUser);
  return newUser;
};

const getAll = () => {
  return db;
};

const deleteUser = (id) => {
  db = db.filter((user) => user.id !== id);
  return db;
};

const getById = (id) => {
  const found = db.find((user) => user.id === id);
  return found;
};

const updateUser = (id, partialUser) => {
  const user = getById(id);

  if (!user) {
    console.log("user not found");
    return;
  }

  deleteUser(id);

  const userUpdate = {
    ...user,
    ...partialUser,
  };

  db.push(userUpdate);

  return updateUser;
};

function main() {
  createUser("12345", "susana", "oria");
  console.log();
}

main();
