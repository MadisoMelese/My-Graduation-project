const Certificate = require('../models/Certificate');
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

// Function to handle Excel file upload and processing
const uploadExcelFile = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Read the Excel file
    const filePath = req.file.path;

    // Convert the Excel file to JSON format
    const result = excelToJson({
      sourceFile: filePath,
      sheets: [{
        name: 'Sheet1',
        header: {
          rows: 1 // Skip the header row
        },
        columnToKey: {
          A: 'certificateID',
          B: 'studentName',
          C: 'internshipDomain',
          D: 'startDate',
          E: 'endDate'
        }
      }]
    });

    // Insert the JSON data into the MongoDB collection
    const certificates = result.Sheet1;

    if (certificates && certificates.length > 0) {
      await Certificate.insertMany(certificates);
      return res.status(200).json({ message: 'Excel file uploaded and data inserted successfully' });
    }

    res.status(400).json({ message: 'No valid data found in the Excel file' });

    // Delete the uploaded file after processing
    fs.unlinkSync(filePath);
  } catch (error) {
    next(error);
  }
};

// Function to fetch certificate by ID
const getCertificateById = async (req, res, next) => {
  try {
    const certificate = await Certificate.findOne({ certificateID: req.params.id });

    if (!certificate) {
      return res.status(404).json({ message: 'Certificate not found' });
    }

    res.status(200).json(certificate);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCertificateById,
  uploadExcelFile,
};
