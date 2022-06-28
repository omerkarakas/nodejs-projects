import express from 'express';
import {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
} from '../controllers/users.js';

const router = express.Router();
export const USERS_ROUTER_BASE = '/users';

/*
payload example:
  {
    "firstName": "Ali",
    "lastName": "Cin",
    "age": 28
  }
*/

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

//put: allows full update, patch: partial update
router.patch('/:id', updateUser);

export default router;
