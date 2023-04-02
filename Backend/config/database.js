const mongoose = require("mongoose")

const mongoUrl = process.env.MONGO_URL

exports.connect = () => {
  mongoose
    .connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    //   useFindAndModify: false,
    //   useCreateIndex: true,
    })
    .then(console.log("DB CONNECTED"))
    .catch((error) => {
      console.log("DB connection failed")
      console.log(error)
      process.exit(1)
    })
}