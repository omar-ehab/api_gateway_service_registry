import express from 'express';
import ServiceRegistryController from '../controllers/ServiceRegistryController.js';

const router = express.Router();
const controller = new ServiceRegistryController();

router.get('/find/:name/:version', controller.get);
router.put('/register/:name/:version/:port', controller.store);
router.delete('/unregister/:name/:version/:port', controller.destroy);




export {router as servicesRoutes};


