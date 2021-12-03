const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(
      process.env.DB_CNN || '', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );
    console.log('DB Online');
    return 'DB Online';
  } catch (e) {
    console.log(e);
    return 'Error init DB';
  }
};

module.exports = dbConnection;
