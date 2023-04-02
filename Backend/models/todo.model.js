const mongoose = require("mongoose")

const TodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    tasks: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          auto: true,
        },
        iscompleted: {
          type: Boolean,
          default: false,
        },
        task: {
          type: String,
          required: true,
        },
      },
    ],
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User' 
    }
  },
  {
    timestamps: true,
  }
)

const Todo = mongoose.model("todo", TodoSchema)

module.exports = Todo