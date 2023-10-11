const MyModel = require('../models/user');

// POST LEAVE RECORDS
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


// GET ALL LEAVE RECORDS
const getAllRecords = async (req, res) => {
    try {
        const records = await MyModel.findAll();
        res.status(200).json({ data: records });
    } catch (error) {
        console.error('Error retrieving records:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


// GET SINGLE RECORD BY ID
const singleRecord = async (req, res) => {
  const {id} = req.params
  try {
    const record = await MyModel.findByPk(id);
    if (!record) {
      return res.status(404).json({message:'Record Not Found This Id'})
    }
    res.status(200).json({data: record})
  } catch (error) {
   console.error('Error retriveving record:', error)
   res.status(500).json({ message: 'Internal server error' });
  }
}

// UPDATE LEAVE RECORD BY ID
const updateRecord = async (req, res) => {
  const { id } = req.params;
  try {
    const record = await MyModel.findByPk(id);
    if (!record) {
      return res.status(404).json({ message: 'Record Not Found for This ID' });
    }

    // Update the record with the data from the request body
    const { category, fromDate, toDate, duration, reason } = req.body;
    await record.update({
      category,
      fromDate,
      toDate,
      duration,
      reason,
    });

    res.status(200).json({ message: 'Record updated successfully', data: record });
  } catch (error) {
    console.error('Error updating record:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}




// DELETE LEAVE RECORD BY ID
const deleteRecord = async (req, res) => {
  const { id } = req.params;
  try {
    const record = await MyModel.findByPk(id);
    if (!record) {
      return res.status(404).json({ message: 'Record Not Found for This ID' });
    }

    // Delete the record
    await record.destroy();

    res.status(204).json({ message : 'Record Deleted Successfully'}); // No content - Record deleted successfully
  } catch (error) {
    console.error('Error deleting record:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}





  module.exports = {UserModel,getAllRecords,singleRecord,updateRecord,deleteRecord}