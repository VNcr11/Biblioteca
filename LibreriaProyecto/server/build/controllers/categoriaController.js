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
exports.categoriaController = void 0;
const database_1 = __importDefault(require("../database"));
class CategoriaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const categorias = yield database_1.default.promise().query('SELECT * FROM categoria');
            res.json(categorias[0]);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const categoria = yield database_1.default.promise().query('SELECT * FROM categoria WHERE idCategoria = ?', [id]);
            if (categoria.length > 0) {
                var categoriaString = JSON.stringify(categoria[0]);
                var result = JSON.parse(categoriaString.substring(1, (categoriaString.length - 1)));
                return res.json(result);
            }
            res.status(404).json({ message: "no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.promise().query('INSERT INTO categoria set ?', [req.body]);
            console.log(req.body);
            res.json({ message: 'Categoria  salvada!' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.promise().query('DELETE FROM categoria WHERE idCategoria = ?', [id]);
            res.json({ message: 'la categoria fue borrada!' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.promise().query('UPDATE categoria set ? WHERE idcategoria = ?', [req.body, id]);
            res.json({ message: 'categoria fue actualizada!' });
        });
    }
}
exports.categoriaController = new CategoriaController();
