import { Sequelize } from "sequelize";
import { dbConfig } from "../config";
import Products from "../app/models/Products";

const models = [Products];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(dbConfig);
        models.map((model) => model.init(this.connection));
    }
}

export default new Database();