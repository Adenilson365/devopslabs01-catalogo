import Sequelize, { Model } from "sequelize";

class Product extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                price: Sequelize.FLOAT,
            },
            {
                sequelize,
                tableName: "products",
                
            }
        );
        return this;
    }
}

export default Product;
