const { request, response } = require('express');
const Client = require('../models/Client');

const getClients = async (req = request, res = response) => {
  try {
    const clients = await Client.find();

    return res.status(200).json({
      success: true,
      clients
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

    const client = await Client.findOne({ idNumber: id });

    if (!client) {
      return res.status(404).json({
        success: false,
        message: 'This Client doesn\'t exist'
      });
    }

    return res.status(200).json({
      success: true,
      client
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
    const client = await Client.findOne({ idNumber: req.body.id });
    if (client) {
      return res.status(400).json({
        success: false,
        message: 'This Client is Duplicate'
      });
    }

    const newClient = new Client(req.body);

    await newClient.save();

    return res.status(200).json({
      success: true,
      newClient
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
    const { idClient } = req.params;
    const { idNumber, ...rest } = req.body;

    const client = await Client.findOneAndUpdate({ idNumber: idClient }, rest,
      { new: true, useFindAndModify: false });

    if (!client) {
      return res.status(404).json({
        success: false,
        message: 'This Client doesn\'t exist'
      });
    }

    return res.status(200).json({
      success: true,
      client
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

    const detail = await Client.findOneAndDelete({ idNumber: id });

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
