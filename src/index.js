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
