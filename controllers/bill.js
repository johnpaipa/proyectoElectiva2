const { response } = require('express');

const Bill = require('../models/Bill');

const getBills = async (req, res = response) => {
  try {
    const bills = await Bill.find();
    return res.status(200).json({
      success: true,
      bills
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      message: 'Contact with admin'
    });
  }
};

const getBill = async (req, res = response) => {
  try {
    const { id } = req.params;

    const bill = await Bill.findOne({ _id: id });

    //TODO: revalidate
    if (!bill) {
      return res.status(400).json({
        success: false,
        message: 'This Bill doesn\'t exist'
      });
    }

    return res.status(200).json({
      success: true,
      bill
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      message: 'Contact with admin'
    });
  }
};

const createBill = async (req, res = response) => {
  try {
    //TODO: look key duplicates

    /*
    if (bill) {
      return res.status(400).json({
        success: false,
        message: 'Bill duplicate or anything else'
      });
    }
    */

    const bill = new Bill(req.body);

    await bill.save();

    return res.status(200).json({
      success: true,
      bill
    });

  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      message: 'Contact with admin'
    });
  }
};

const updateBill = async (req, res = response) => {
  try {
    const { id } = req.params;
    const { bId, ...rest } = req.body;

    const bill = await Bill.findOneAndUpdate({ _id: id }, rest,
      { new: true, useFindAndModify: false });

    if (!bill) {
      return res.status(400).json({
        success: false,
        message: 'This Bill doesn\'t exist'
      });
    }

    return res.status(200).json({
      success: true,
      bill
    });

  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      message: 'Contact with admin'
    });
  }
};

const deleteBill = async (req, res = response) => {
  try {
    const { id } = req.params;

    const bill = await Bill.findByIdAndDelete(id);

    if (!bill) {
      return res.status(400).json({
        success: false,
        message: 'This Bill doesn\'t exist'
      });
    }

    return res.status(200).json({
      success: true,
      bill
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      message: 'Contact with admin'
    });
  }
};


module.exports = {
  getBill,
  getBills,
  deleteBill,
  createBill,
  updateBill
};
