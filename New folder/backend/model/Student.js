const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  studentId: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  course: {
    type: String,
    require: true,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
