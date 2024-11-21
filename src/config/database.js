// module.exports = {
//     dialect: 'postgres',
//     host: 'db',
//     username: 'admin',
//     password: 'admin',
//     database: 'devopslabs',
//     logging: console.log,
//     define: {
//       timestamps: true, 
//       underscored: true,
//       underscoredAll: true, 
//     }
// };

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  logging: console.log,
  define: {
    timestamps: true, 
    underscored: true,
    underscoredAll: true, 
  },
};
