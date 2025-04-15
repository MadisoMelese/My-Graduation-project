const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  certificateID: { 
    type: String, 
    required: true, 
    unique: true 
  },
  studentName: { 
    type: String, 
    required: true 
  },
  internshipDomain: { 
    type: String, 
    required: true 
  },
  startDate: { 
    type: Date,
    required: true 
    },
  endDate: {
     type: Date, 
     required: true
     },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;