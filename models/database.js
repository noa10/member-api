const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hqRM', 'root', 'mysql*21641#', {
    host: 'hqrm.mahnazfood.com',
    port: 23306,
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;

