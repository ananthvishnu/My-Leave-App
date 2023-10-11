const Sequelize = require('sequelize');

// const sequelize = new Sequelize('brw70bzrys14mnbnwksu', 'ustxs6qntyvbk5y8', 'Db9Ht1BFqiKSZkFirOQH', {
//   host: 'brw70bzrys14mnbnwksu-mysql.services.clever-cloud.com',
//   dialect: 'mysql'
// });

const sequelize = new Sequelize('mydatabase', 'root', 'Vishnu2002@', {
  host: 'localhost',
  dialect: 'mysql'
});

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
});


module.exports = sequelize;