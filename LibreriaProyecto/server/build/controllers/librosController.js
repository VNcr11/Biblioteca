"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.librosController = void 0;
const database_1 = __importDefault(require("../database"));
class LibrosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const libros = yield database_1.default.promise().query('SELECT * FROM libros');
            res.json(libros[0]);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const libro = yield database_1.default.promise().query('SELECT * FROM libros WHERE clave = ?', [id]);
            if (libro.length > 0) {
                var librosString = JSON.stringify(libro[0]);
                var result = JSON.parse(librosString.substring(1, (librosString.length - 1)));
                return res.json(result);
            }
            res.status(404).json({ message: "does´t exist" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.promise().query('INSERT INTO libros set ?', [req.body]);
            console.log(req.body);
            res.json({ message: 'libros saved!' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.promise().query('DELETE FROM libros WHERE clave = ?', [id]);
            res.json({ message: 'libros deleted successfully!' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.promise().query('UPDATE libros  set ? WHERE clave = ?', [req.body, id]);
            res.json({ message: 'Categoria updated successfully!' });
        });
    }
}
exports.librosController = new LibrosController();
