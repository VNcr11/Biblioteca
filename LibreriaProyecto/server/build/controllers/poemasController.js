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
exports.poemasController = void 0;
const database_1 = __importDefault(require("../database"));
class PoemasController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const poems = yield database_1.default.promise().query('SELECT * FROM poema');
            res.json(poems[0]);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const poem = yield database_1.default.promise().query('SELECT * FROM poema WHERE idPoema = ?', [id]);
            if (poem.length > 0) {
                var poemString = JSON.stringify(poem[0]);
                var result = JSON.parse(poemString.substring(1, (poemString.length - 1)));
                return res.json(result);
            }
            res.status(404).json({ message: "The poem does´t exist" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.promise().query('INSERT INTO poema set ?', [req.body]);
            console.log(req.body);
            res.json({ message: 'Poem saved!' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.promise().query('DELETE FROM poema WHERE idPoema = ?', [id]);
            res.json({ message: 'Poem deleted successfully!' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.promise().query('UPDATE poema set ? WHERE idPoema = ?', [req.body, id]);
            res.json({ message: 'Poem updated successfully!' });
        });
    }
}
exports.poemasController = new PoemasController();
