import express from 'express';
import ProductsController from '../controllers/products.controller';
import { ProductsMockRepository } from '../repositories/products-mock-repository';

const repository = new ProductsMockRepository();
const controller = new ProductsController(repository);

const router = express.Router();

router.get('', (_, res) => {
  return res.json(controller.getAllItems());
});

router.get('/:id', (req, res) => {
  try {
    return res.json(controller.getItemById(req.params.id));
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/find/:name', (req, res) => {
  try {
    return res.json(controller.findProductByName(req.params.name));
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('', (req, res) => {
  try {
    return res.json(controller.addItem(req.body));
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
  try {
    return res.json(controller.updateItem(req.params.id, req.body));
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  try {
    return res.json(controller.deleteItem(req.params.id));
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
