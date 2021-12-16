const { response } = require('express');

const Bill = require('../models/Bill');
const Detail = require('../models/Detail');
const Product = require('../models/Product');

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
    const newBill = new Bill(req.body);

    await newBill.save();

    return res.status(200).json({
      success: true,
      newBill
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

const calcTotal = async (req, res) => {
  try {
      const { id } = req.params;
        const bill = await Bill.findById({ _id: id });
        let total = 0;
        for (let i = 0; i < bill.details.length; i++) {
            const detail = await Detail.findById({ _id: bill.details[i] });
            const product = await Product.findById({ _id: detail.product });
            total += (detail.cant * product.value)+(product.value*0.19);
            
        }
        return res.status(200).json({
            message: "El total es: "+total,
            total
        });
  } catch (error) {
      return res.status(500).json({
          message: "Error",
          error: error.message
      });
  }    

};


module.exports = {
  getBill,
  getBills,
  deleteBill,
  createBill,
  updateBill,
  calcTotal  
};
