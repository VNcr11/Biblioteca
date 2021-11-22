import {Router} from 'express';
import {librosController} from '../controllers/librosController';

class LibrosRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void { //Definir rutas 
        this.router.get('/', librosController.list);
        this.router.get('/:id', librosController.getOne);
        this.router.post('/', librosController.create);
        this.router.delete('/:id', librosController.delete);
        this.router.put('/:id', librosController.update);
    }
}

const librosRoutes = new LibrosRoutes();
export default librosRoutes.router;