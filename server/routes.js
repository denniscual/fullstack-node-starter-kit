// we will import all the package in here
import express from 'express';
// we will import all our custom modules in here
import basicController from './controllers/basicController';


// creating an instance of Router class
const router = express.Router();

router.get('/', basicController.get);

// exporting our router.
export default router;
