const Sequelize = require('sequelize');
const sequelize = require('../db/database');


const MyModel = sequelize.define('MyModel', {
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  fromDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  toDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  duration: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  reason: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

try {
  MyModel.sync({ force: false })
    .then(() => {
      console.log('Table created successfully.');
    })
    .catch(err => {
      console.error('Error creating table:', err);
    });
} catch (error) {
  console.error('Error:', error);
}

module.exports = MyModel;