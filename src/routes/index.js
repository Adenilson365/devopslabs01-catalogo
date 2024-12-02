import { Router } from "express";
import ProductController from "../app/controllers/ProductController.js";

const router = new Router();

router.get("/products", ProductController.index);
router.get("/products/:id", ProductController.show);
router.post("/products", ProductController.store);
router.put("/products/:id", ProductController.update);
router.delete("/products/:id", ProductController.delete);
export default router;
