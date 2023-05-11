const { checkSchema } = require("express-validator");

const taskValidationSchema = checkSchema({
  id: {
    optional: true,
    isInt: {
      errorMessage: "ID must be an integer",
      equals: 0,
    },
  },
  uuid: {
    optional: true,
    isString: {
      errorMessage: "Must be empty string",
    },
  },
  title: {
    isString: {
      errorMessage: "Title must be a string",
    },
    trim: true,
    escape: true,
    isLength: {
      errorMessage: "Title must be 255 characters max",
      options: { max: 255 },
    },
  },
  tag: {
    isString: {
      errorMessage: "Tag must be a string",
    },
    trim: true,
    escape: true,
  },
  completed: {
    isBoolean: {
      errorMessage: "Completed must be a boolean",
    },
  },
});

module.exports = taskValidationSchema;
