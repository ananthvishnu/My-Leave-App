const Sequelize = require('sequelize');

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