import { Sequelize } from "sequelize";
import dbConfig from "../config/database"
import Products from "../app/models/Product.js";

const models = [Products];

class Database {
    constructor() {
        this.connection = null;
        this.init(); // Chamando init ao criar a instância
    }

    async init() {
        console.log("Tentando conectar com o banco de dados...");
        try {
            this.connection = new Sequelize(dbConfig);

            // Testa a conexão inicial
            await this.testConnection();
            console.log("Conexão com o banco de dados estabelecida com sucesso!");

            // Inicializa os modelos
            models.map((model) => model.init(this.connection));
        } catch (error) {
            console.error("Falha ao conectar com o banco de dados:", error);
        }
    }

    async testConnection() {
        try {
            await this.connection.authenticate();
            console.log("Teste de conexão bem-sucedido!");
        } catch (error) {
            console.error("Erro no teste de conexão:", error);
            throw error; // Opcional: Lança o erro se o teste falhar
        }
    }
}

export default new Database();
