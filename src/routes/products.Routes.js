import { Router } from "express";
import {deleteOne, getAll, getOne, insertOne, updateOne} from "../controllers/products.controller.js";

const router=Router();

router.get('/', getAll);
router.get('/:barcode', getOne);
router.post('/', insertOne);
router.post('/:barcode', updateOne);
router.get('/delete/:barcode', deleteOne);

//aqui lleva la funcion que va a tener el procesamiento
export default router;

