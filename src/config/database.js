module.exports = {
    dialect: 'postgres',
    host: 'db',
    username: 'admin',
    password: 'admin',
    database: 'devopslabs',
    define: {
      timestamps: true, 
      underscored: true,
      underscoredAll: true, 
    }
};