"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const librosController_1 = require("../controllers/librosController");
class LibrosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', librosController_1.librosController.list);
        this.router.get('/:id', librosController_1.librosController.getOne);
        this.router.post('/', librosController_1.librosController.create);
        this.router.delete('/:id', librosController_1.librosController.delete);
        this.router.put('/:id', librosController_1.librosController.update);
    }
}
const librosRoutes = new LibrosRoutes();
exports.default = librosRoutes.router;
