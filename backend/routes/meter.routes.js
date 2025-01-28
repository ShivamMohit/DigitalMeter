import { Router } from 'express';
import MeterController from '../controllers/meter.controller.js';


const router = Router();


router.get('/get', MeterController.get);

router.post('/insert', MeterController.insert);

// router.post('/insert/file', MeterController.insertFromFile);

router.delete('/delete', MeterController.delete);

export default router;