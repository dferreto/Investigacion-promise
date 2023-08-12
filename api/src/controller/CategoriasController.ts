import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { CategoriaProducto } from '../entity/CategoriaProducto';

class CategoriasController {
  static getAll = async (req: Request, resp: Response) => {
    try {
      const categoriaRepo = AppDataSource.getRepository(CategoriaProducto);

      const lista = await categoriaRepo.find({
        where: { estado: true },
      });

      if (lista.length == 0) {
        return resp.status(404).json({ mensaje: 'No se encontró resultados.' });
      }
      return resp.status(200).json(lista);
    } catch (error) {
      return resp.status(400).json({ mensaje: error });
    }
  };
}

export default CategoriasController;
