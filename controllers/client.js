const { request, response } = require('express');

const getClients = async (req = request, res = response) => {
  try {
    const details = '';
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

const getClient = async (req = request, res = response) => {
  try {
    const { id } = req.params;

    const detail = 'await Detail.findOne({ id: id });';

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

const createClient = async (req = request, res = response) => {
  try {

    const detail = 'await Detail.findOne({ id: req.body.id });';
    if (detail) {
      return res.status(400).json({
        success: false,
        message: 'This Detail is Duplicate'
      });
    }

    const newDetail = new Detail(req.body);

    await newDetail.save();

    return res.status(200).json({
      success: true,
      newDetail
    });

  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      message: 'Contact with admin'
    });
  }
};


const updateClient = async (req = request, res = response) => {
  try {
    const { idDetail } = req.params;
    const { id, ...rest } = req.body;

    const detail = 'await Detail.findOneAndUpdate({ id: idDetail }, rest,';

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

const deleteClient = async (req = request, res = response) => {
  try {
    const { id } = req.params;

    const detail = 'await Detail.findOneAndDelete({ id });';

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
  getClient,
  getClients,
  createClient,
  updateClient,
  deleteClient
};
