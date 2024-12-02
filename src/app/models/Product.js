import Sequelize, { Model } from "sequelize";

class Product extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                price: Sequelize.FLOAT,
                imagem_id: Sequelize.STRING,
                category: Sequelize.STRING,
                stars: Sequelize.INTEGER,
                stock: Sequelize.INTEGER,
                num_reviews: Sequelize.INTEGER,
                created_at: Sequelize.DATE,
                updated_at: Sequelize.DATE,
            },
            {
                sequelize,
                tableName: "products",
                timestamps: true,
                createdAt: "created_at",
                updatedAt: "updated_at",
            }
        );
        return this;
    }
}

export default Product;
