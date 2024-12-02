import Product from "../models/Product.js";

class ProductController {
    async index(req, res) {
        console.log("Fetching products...", req.query);
        try {
            const products = await Product.findAll();
            console.log("Products:", products);

            if (!Array.isArray(products)) {
                throw new Error("Invalid response from database");
            }

            return res.status(200).json(products);
        } catch (error) {
            console.error("Error fetching products:", error.message || error);
            return res.status(500).json({ error: "Error fetching products" });
        }
    }

    async show(req, res) {
        const { id } = req.params;
        try {
            const product = await Product.findByPk(id);
            if (!product) {
                return res.status(404).json({ error: "Product not found" });
            }
            return res.status(200).json(product);
        } catch (error) {
            return res.status(500).json({ error: "Error fetching product" });
        }
    }

    async store(req, res) {
        const { name, price, imagem_id, category, stars, stock, num_reviews } = req.body;
        try {
            const product = await Product.create({ name, price, imagem_id, category, stars, stock, num_reviews });
            return res.status(201).json(product);
        } catch (error) {
            return res.status(500).json({ error: "Error creating product" });
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const { name, price, imagem_id, category, stars, stock, num_reviews } = req.body;
        try {
            const product = await Product.findByPk(id);
            if (!product) {
                return res.status(404).json({ error: "Product not found" });
            }
            await product.update({ name, price, imagem_id, category, stars, stock, num_reviews });
            return res.status(200).json(product);
        } catch (error) {
            return res.status(500).json({ error: "Error updating product" });
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        try {
            const product = await Product.findByPk(id);
            if (!product) {
                return res.status(404).json({ error: "Product not found" });
            }
            await product.destroy();
            return res.status(200).json({ message: "Product deleted successfully" });
        } catch (error) {
            return res.status(500).json({ error: "Error deleting product" });
        }
    }
}

export default new ProductController();
