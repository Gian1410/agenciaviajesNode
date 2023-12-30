import express from 'express';

import { 
    guardarTestimonial,
} from '../controllers/testimonialesController.js';

import { 
    paginaInicio,
    paginaNosotros,
    paginasViajes,
    paginasTestimoniales,
    paginasDetalleViaje 
} from '../controllers/paginasController.js';

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros',paginaNosotros);

router.get('/viajes', paginasViajes );
router.get('/viajes/:slug', paginasDetalleViaje );
router.post('/testimoniales', guardarTestimonial);
router.get('/testimoniales', paginasTestimoniales);





export default router;