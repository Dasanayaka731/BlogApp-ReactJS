const mongoose = require("mongoose");

const schema = mongoose.Schema;

const articlesSchema = new schema({
  name: {
    type: String,
  },
  comments: {
    type: Array,
  },
  discription: {
    type: String,
  },
});

//creating a model named "Student" using the Mongoose library and the "studentSchema" variable
const Articles = mongoose.model("Articles", articlesSchema);

module.exports = Articles;
