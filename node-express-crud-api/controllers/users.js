import { uuid } from 'uuidv4';
import { data } from '../data.js';

let users = data;

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuid() });

  res.send(`User with the username ${user.firstName} added to the database`);
};

export const getUser = (req, res) => {
  const { id } = req.params;
  res.send(users.find((user) => user.id === id));
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);

  res.send(`User with id: ${id} deleted successfully`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;

  const userToUpdate = users.find((user) => user.id === id);
  const { firstName, lastName, age } = req.body;

  if (firstName) userToUpdate.firstName = firstName;
  if (lastName) userToUpdate.lastName = lastName;
  if (age) userToUpdate.age = age;

  res.send(`User with id: ${id} UPDATED to the database`);
};
