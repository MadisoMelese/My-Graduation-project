const express = require('express');
const multer = require('multer');
const { uploadExcelFile } = require('../controllers/uploadController'); 
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
    file.mimetype === 'application/vnd.ms-excel'
  ) {
    cb(null, true); // Accept the file
  } else {
    cb(new Error('Excel files only!'), false); 
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});


router.post('/', authenticateToken, upload.single('file'), uploadExcelFile);

module.exports = router;
