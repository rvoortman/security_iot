import Express from 'express';
import * as UserController from '../controllers/user.controller.js';
const router = Express.Router();

// Get one User
router.route('/user/:user_id').get(UserController.getUser);

module.exports = router;
