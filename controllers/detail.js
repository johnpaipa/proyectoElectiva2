const { request, response } = require('express');
const Detail = require('../models/Detail');

const getDetails = async (req = request, res = response) => {
  try {
    const details = await Detail.find();
    return res.status(200).json({
      success: true,
      details
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      message: 'Contact with admin'
    });
  }
};

const getDetail = async (req = request, res = response) => {
  try {
    const { id } = req.params;

    const detail = await Detail.findOne({ id: id });

    //TODO: revalidate

    if (!detail) {
      return res.status(404).json({
        success: false,
        message: 'This Detail doesn\'t exist'
      });
    }

    return res.status(200).json({
      success: true,
      detail
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      message: 'Contact with admin'
    });
  }
};

const createDetail = async (req = request, res = response) => {
  try {
    const detail = new Detail(req.body);
    console.log(req.body);

    await detail.save();

    return res.status(200).json({
      success: true,
      detail
    });

  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      message: 'Contact with admin'
    });
  }
};


const updateDetail = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const { ...rest } = req.body;

    const detail = await Detail.findOneAndUpdate({ id: id }, rest,
      { new: true, useFindAndModify: false });

    if (!detail) {
      return res.status(404).json({
        success: false,
        message: 'This Detail doesn\'t exist'
      });
    }

    return res.status(200).json({
      success: true,
      detail
    });

  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      message: 'Contact with admin'
    });
  }
};

const deleteDetail = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const obj = await Detail.findOne({ id: id });

    const detail = await Detail.findByIdAndDelete(obj._id);

    if (!detail) {
      return res.status(404).json({
        success: false,
        message: 'This Detail doesn\'t exist'
      });
    }

    return res.status(200).json({
      success: true,
      detail
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
  getDetails,
  getDetail,
  updateDetail,
  createDetail,
  deleteDetail,
};
