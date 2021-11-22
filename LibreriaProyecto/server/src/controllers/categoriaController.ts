import {Request, Response} from 'express';
import pool from '../database';

class CategoriaController {

    public async list (req: Request, res: Response): Promise<void> {
        const categorias = await pool.promise().query('SELECT * FROM categoria');
        res.json(categorias[0]);
    } 

    public async getOne(req: Request, res: Response): Promise<any> {
        const {id} = req.params;
        const categoria = await pool.promise().query('SELECT * FROM categoria WHERE idCategoria = ?', [id]);
        if (categoria.length > 0) {
            var categoriaString = JSON.stringify(categoria[0]);
            var result = JSON.parse(categoriaString.substring(1,(categoriaString.length-1)));
            return res.json(result);
        }
        res.status(404).json({message: "no existe"});
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.promise().query('INSERT INTO categoria set ?', [req.body]);
        console.log(req.body);
        res.json({message: 'Categoria  salvada!'});
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.promise().query('DELETE FROM categoria WHERE idCategoria = ?', [id]);
        res.json({message: 'la categoria fue borrada!'});
    }

    public async update(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.promise().query('UPDATE categoria set ? WHERE idcategoria = ?', [req.body, id]);
        res.json({message: 'categoria fue actualizada!'});
    }
}

export const categoriaController = new CategoriaController();