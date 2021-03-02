const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      required: [true, "Set email for contact"],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, "Set phone for contact"],
      validate: {
        validator: function (v) {
          return (/\d{3}-\d{3}-\d{4}/.test(v));
        },
        message: props => `${props.value} is not a valid phone format!`
      },
    },
    subscription: {
      type: String,
    },
    password: {
      type: String,
      require: [true, "Set password for contact"],
    },
    token: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

const Contact = model("contact", contactSchema);

module.exports = Contact;
