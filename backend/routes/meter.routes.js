import { Router } from 'express';
import MeterController from '../controllers/meter.controller.js';


const router = Router();


router.get('/get', MeterController.get);

router.get('/get/const',MeterController.getConstraints);

router.post('/insert', MeterController.insert);

router.delete('/delete', MeterController.delete);

export default router;