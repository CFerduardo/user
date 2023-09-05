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
    (id, name, lastname, dni, year, createdAt, deletedAt, updateAt);
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

// function to find the user
