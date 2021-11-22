import {Request, Response} from 'express';
import pool from '../database';

class LibrosController {

    public async list (req: Request, res: Response): Promise<void> {
        const libros = await pool.promise().query('SELECT * FROM libros');
        res.json(libros[0]);
    } 

    public async getOne(req: Request, res: Response): Promise<any> {
        const {id} = req.params;
        const libro = await pool.promise().query('SELECT * FROM libros WHERE clave = ?', [id]);
        if (libro.length > 0) {
            var librosString = JSON.stringify(libro[0]);
            var result = JSON.parse(librosString.substring(1,(librosString.length-1)));
            return res.json(result);
        }
        res.status(404).json({message: "does´t exist"});
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.promise().query('INSERT INTO libros set ?', [req.body]);
        console.log(req.body);
        res.json({message: 'libros saved!'});
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.promise().query('DELETE FROM libros WHERE clave = ?', [id]);
        res.json({message: 'libros deleted successfully!'});
    }

    public async update(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.promise().query('UPDATE libros  set ? WHERE clave = ?', [req.body, id]);
        res.json({message: 'Categoria updated successfully!'});
    }
}

export const librosController = new LibrosController();