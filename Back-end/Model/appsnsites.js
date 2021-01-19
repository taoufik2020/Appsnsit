const mongose = require("mongoose");

const appsnsitSchema = new mongose.Schema(
  {
    name: {
      type: String,
      trim: true,
      maxlength: 32,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      minlength: 10,
    },
  },
  { timestamps: true }
);

module.exports = mongose.model("Test", appsnsitSchema);
