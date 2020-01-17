const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://novak254:novak254@ewarranty-fobsb.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  },
  () => {
    console.log("Database coonnected successfully");
  }
);
