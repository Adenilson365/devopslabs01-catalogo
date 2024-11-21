module.exports = {
    dialect: 'postgres',
    host: 'db',
    username: 'admin',
    password: 'admin',
    database: 'devopslabs',
    logging: console.log,
    define: {
      timestamps: true, 
      underscored: true,
      underscoredAll: true, 
    }
};