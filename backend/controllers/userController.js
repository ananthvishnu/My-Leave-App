const MyModel = require('../models/user');


 const UserModel = async (req, res) => {
    try {
      const { category, fromDate, toDate, duration, reason } = req.body;
  
      const newRecord = await MyModel.create({
        category,
        fromDate,
        toDate,
        duration,
        reason,
      });
  
      res.status(201).json({ message: 'Record created successfully', data: newRecord });
    } catch (error) {
      console.error('Error creating record:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };



  const getAllRecords = async (req, res) => {
    try {
        const records = await MyModel.findAll();
        res.status(200).json({ data: records });
    } catch (error) {
        console.error('Error retrieving records:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

  module.exports = {UserModel,getAllRecords}