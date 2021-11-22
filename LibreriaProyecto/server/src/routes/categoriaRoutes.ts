import {Router} from 'express';
import {categoriaController} from '../controllers/categoriaController';

class CategoriaRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void { //Definir rutas 
        this.router.get('/', categoriaController.list);
        this.router.get('/:id', categoriaController.getOne);
        this.router.post('/', categoriaController.create);
        this.router.delete('/:id', categoriaController.delete);
        this.router.put('/:id', categoriaController.update);
    }
}

const categoriaRoutes = new CategoriaRoutes();
export default categoriaRoutes.router;