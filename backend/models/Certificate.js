const mongoose = require('mongoose');

const CertificateSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Certificate', CertificateSchema);
