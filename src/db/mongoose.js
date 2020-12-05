const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Running mongodb in local:

// D:\Learning\mongodb\bin\mongod.exe --dbpath=D:\Learning\mongodb-data
